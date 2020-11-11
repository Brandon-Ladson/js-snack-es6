// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// array delle bici
const listaBici = [

  {
    "nome": "mountain",
    "peso": 10
  },

  {
    "nome": "bmx",
    "peso": 7
  },

  {
    "nome": "corsa",
    "peso": 3
  },

  {
    "nome": "grazziella",
    "peso": 5
  }

];

var pesoMinore = listaBici[0];

// ciclo forEach per ciclare l'array lista bici
listaBici.forEach((element) => {

  if (element.peso < pesoMinore.peso) {
    pesoMinore = element;
  }

});

console.log(
  `con un peso di ${pesoMinore.peso} kg la bici più leggera è: ${pesoMinore.nome}`
);
