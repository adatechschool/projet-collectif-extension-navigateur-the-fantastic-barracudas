document.addEventListener("DOMContentLoaded", function () {
    if (chrome.storage && chrome.storage.local) {
        chrome.storage.local.get("greeting", function (data) {
            if (data.greeting) {
                console.log("Message reçu dans la popup:", data.greeting);
            }
        });
    } else {
        console.log("chrome.storage.local n'est pas disponible.");
    }
});
console.log("popup");