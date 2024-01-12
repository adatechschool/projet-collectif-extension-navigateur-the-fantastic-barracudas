//Récuperer l'url des images que l'on a stocké dans le background.
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("etatToggle", function (data) {
    if (data.etatToggle !== undefined) {
      document.getElementById("toggle").checked = data.etatToggle;
    }
  });

  chrome.storage.local.get({ images: [] }, function (data) {
    console.log(data.images);

    //On itère sur chaque élément du tableau data.images et on crée la card dynamiquement.
    data.images.forEach(function (url, index) {
      const baliseArticle = document.createElement("article");
      const deleteBtn = document.createElement("button");

      const image = document.createElement("img");
      image.src = url;

      deleteBtn.onclick = function () {
        deleteImage(index);
      };

      document.querySelector(".img").appendChild(baliseArticle);

      baliseArticle.appendChild(image);
      baliseArticle.appendChild(deleteImg);
    });
  });
});

document.getElementById("toggle").addEventListener("change", function () {
  const etatToggle = this.checked;
  chrome.storage.local.set({ etatToggle: etatToggle });

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { toggleEtat: etatToggle });
  });
});

function deleteImage(index) {
  chrome.storage.local.get({ images: [] }, function (data) {
    let updatedImages = data.images;
    updatedImages.splice(index, 1);
    chrome.storage.local.set({ images: updatedImages }, function () {
      location.reload();
    });
  });
}
