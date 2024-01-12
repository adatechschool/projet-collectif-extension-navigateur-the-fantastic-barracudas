//Récupérer une image dans une page web
function selectUrl(e) {
  if (e.target.tagName === "IMG") {
    console.log(e.target.src);
    chrome.runtime.sendMessage({ imageUrl: e.target.src });
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.toggleEtat) {
    document.addEventListener("click", selectUrl);
  } else {
    console.log("hey");
    document.removeEventListener("click", selectUrl);
  }
});
