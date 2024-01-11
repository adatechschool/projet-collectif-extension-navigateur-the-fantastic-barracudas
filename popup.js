//chrome.storage.local.set({ "etatCheckbox": false })
console.log(document.getElementById("toggle").checked)
document.getElementById("toggle").addEventListener("change", async function () {
    if (this.checked) {
        //chrome.storage.local.get("etatCheckbox", function (data) {
        //let petitBoolean = data.etatCheckbox;
        let petitBoolean = true;
        chrome.storage.local.set({ "etatCheckbox": petitBoolean });
        console.log("true");
        let p = await chrome.storage.local.get(etatCheckbox);
        console.log(p)
        //});
    } else {
        //chrome.storage.local.get("etatCheckbox", function (data) {
        //let petitBoolean = data.etatCheckbox;
        let petitBoolean = false;
        chrome.storage.local.set({ "etatCheckbox": petitBoolean });
        console.log("false");
        let t = await chrome.storage.local.get(etatCheckbox);
        console.log(t)
        // })
    }
})


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
