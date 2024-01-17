// Récupérer le message de l'état du toggle qui vient de la popup : si l'état est vrai
// alors on peut cliquer sinon on supprime les évènements de click et mouseup

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.toggleEtat) {
    document.addEventListener("click", selectUrl);
    document.addEventListener("mouseup", selectText);
  } else {
    console.log("hey");
    document.removeEventListener("click", selectUrl);
    document.removeEventListener("mouseup", selectText);
  }
});


//Récupérer une image dans une page web et envoyer le message imageUrl au background :

function selectUrl(e) {
  if (e.target.tagName === "IMG") {
    console.log(e.target.src);
    chrome.runtime.sendMessage({ imageUrl: e.target.src });
  }
}

// Récupérer du texte dans une page web et envoyer le message text_content au background :

function selectText() {
  const selectedText = window.getSelection().toString();
  if (selectedText.rangeCount > 0 || selectedText !== "\n") {
    console.log(selectedText);
    chrome.runtime.sendMessage({ text_content: selectedText });
  }
}


