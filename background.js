//Récuperer le message du fichier content et le stocker sur le storage local.
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("gfrgrgrg", message.imageUrl);
  if (message.imageUrl) {
    chrome.storage.local.get({ images: [] }, function (data) {
      let image = data.images;
      image.push(message.imageUrl);
      chrome.storage.local.set({ images: image });
      console.log(image);
    });
  }

  if (message.text_content) {
    chrome.storage.local.get({ tab_textes: [] }, function (data) {
      let text = data.tab_textes;
      text.push(message.text_content);
      chrome.storage.local.set({ tab_textes: text });
      console.log(text);
    });
  }
});

// const contextMenuItem = {
//     "id": "Ideas Nest",
//     "title": "Envoyer vers Ideas Nest",
//     "contexts": ["selection"]
// };
// chrome.contextMenus.create(contextMenuItem);
