//chrome.runtime.sendMessage({ greeting: 'Salut depuis l\'arrière-plan!' });
//console.log("content")

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//     let selectionTexte = window.getSelection();
//     console.log(selectionTexte);
// }
// )

//Récupérer une image dans une page web
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        let selectImageSource = e.target.src;
        chrome.runtime.sendMessage({ url: selectImageSource })
        console.log(selectImageSource);
    }
})
