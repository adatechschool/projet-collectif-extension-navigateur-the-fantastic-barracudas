//chrome.runtime.sendMessage({ greeting: 'Salut depuis l\'arrière-plan!' });
//console.log("content")

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    let selectionTexte = window.getSelection();
    console.log(selectionTexte);
}
)