
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log('Message reçu :', message.greeting);
//     chrome.storage.local.set({ greeting: message.greeting })
// })

const contextMenuItem = {
    "id": "Ideas Nest",
    "title": "Envoyer vers Ideas Nest",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

