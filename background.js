// Récupérer les messages envoyés depuis le content : 

chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  sendResponse
) {
  if (message.imageUrl) { // si il y a un message :
    chrome.storage.sync.get({ images: [] }, function (data) { // on le récupère et crée le tableau "images" 
      // (data = nom de l'objet de base)
      let image = data.images; // on récupère les données du tableau "images"
      image.push(message.imageUrl); // on range le message reçu (les URL des images cliquées) dans ce tableau "image"
      chrome.storage.sync.set({ images: image }); // on met ce tableau dans le premier tableau et on le sauvegarde dans le storage local
      console.log(image);
    });

    // idem pour les textes :
  } else if (message.text_content) {
    chrome.storage.sync.get({ tab_textes: [] }, function (data) {
      let texte = data.tab_textes;
      texte.push(message.text_content);
      chrome.storage.sync.set({ tab_textes: texte });
      console.log(texte);
    })
  }

});
