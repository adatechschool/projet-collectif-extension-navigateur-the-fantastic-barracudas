function getStorageData(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError));
      } else {
        resolve(result);
      }
    });
  });
}

function setStorageData(data) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(data, () => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError));
      } else {
        resolve();
      }
    });
  });
}

chrome.runtime.onMessage.addListener(async function (
  message,
  sender,
  sendResponse
) {
  try {
    if (message.imageUrl) {
      const data = await getStorageData({ images: [] });
      let image = data.images;
      image.push(message.imageUrl);
      await setStorageData({ images: image });
      console.log(image);
    } else if (message.text_content) {
      const data = await getStorageData({ tab_textes: [] });
      let text = data.tab_textes;
      text.push(message.text_content);
      await setStorageData({ tab_textes: text });
      console.log(text);
    }
  } catch (error) {
    console.error("Erreur");
  }
});

//Récuperer le message du fichier content et le stocker sur le storage local.
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   console.log("", message.imageUrl);
//   if (message.imageUrl) {
//     chrome.storage.local.get({ images: [] }, function (data) {
//       let image = data.images;
//       image.push(message.imageUrl);
//       chrome.storage.local.set({ images: image });
//       console.log(image);
//     });
//   } else if (message.text_content) {
//     chrome.storage.local.get({ tab_textes: [] }, function (data) {
//       let text = data.tab_textes;
//       text.push(message.text_content);
//       chrome.storage.local.set({ tab_textes: text });
//       console.log(text);
//     });
//   }
// });

// const contextMenuItem = {
//     "id": "Ideas Nest",
//     "title": "Envoyer vers Ideas Nest",
//     "contexts": ["selection"]
// };
// chrome.contextMenus.create(contextMenuItem);
