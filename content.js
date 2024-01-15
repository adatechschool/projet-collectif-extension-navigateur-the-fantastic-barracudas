//Récupérer une image dans une page web
function selectUrl(e) {
  if (e.target.tagName === "IMG") {
    console.log(e.target.src);
    chrome.runtime.sendMessage({ imageUrl: e.target.src });
  }
}

function selectText() {
  const selectedText = window.getSelection().toString();
  if (selectedText.rangeCount > 0 || selectedText !== "\n") {
    console.log(selectedText);
    chrome.runtime.sendMessage({ text_content: selectedText });
  }
}

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
