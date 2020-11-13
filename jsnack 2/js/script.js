// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// array di partenza
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

console.log(arrayObj);

// ciclo map per creare una copia dell'array di partenza e per aggiungere ad ogni oggetto la proprietà position
const arrayObjCopia = arrayObj.map((element) => {
  return {...element, position: generatoreLettereRandom()}
});

console.log(arrayObjCopia);

// FUNZIONI
// funzione per generare lettere random
function generatoreLettereRandom() {

  var letteraRandom;

  const listaLettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < listaLettere.length; i++) {
    letteraRandom = listaLettere.charAt(Math.floor(Math.random() * listaLettere.length));
  }

  return letteraRandom;

}
