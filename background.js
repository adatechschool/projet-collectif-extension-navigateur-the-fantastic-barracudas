//Récuperer le message du fichier content et le stocker sur le storage local.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  chrome.storage.local.get({ images: [] }, function (data) {
    let image = data.images;
    image.push(message.imageUrl);
    chrome.storage.local.set({ images: image });
    console.log(image);
  });
});

// const contextMenuItem = {
//     "id": "Ideas Nest",
//     "title": "Envoyer vers Ideas Nest",
//     "contexts": ["selection"]
// };
// chrome.contextMenus.create(contextMenuItem);
