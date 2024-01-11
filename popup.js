//Récuperer l'url des images que l'on a stocké dans le background.
document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get({ images: [] }, function (data) {
        console.log(data.images);

        //On itère sur chaque élément du tableau data.images et on crée la card dynamiquement.
        for (let i = 0; i < data.images.length; i++) {
            const article = data.images[i];
            const baliseArticle = document.createElement('article');

            const image = document.createElement("img");
            image.src = article;

            document.querySelector(".img").appendChild(baliseArticle);
            baliseArticle.appendChild(image);
        }

    });
})
