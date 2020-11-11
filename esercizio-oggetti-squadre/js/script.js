// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25

// array delle squadre
const listaSquadre = [

  {
    "nome": "Timberwolves",
    "puntifatti": 0,
    "fallisubiti": 0
  },

  {
    "nome": "Rockets",
    "puntifatti": 0,
    "fallisubiti": 0
  },

  {
    "nome": "Lakers",
    "puntifatti": 0,
    "fallisubiti": 0
  },

  {
    "nome": "Raptors",
    "puntifatti": 0,
    "fallisubiti": 0
  },

  {
    "nome": "Bulls",
    "puntifatti": 0,
    "fallisubiti": 0
  }

];

var puntiFatti;

var falliSubiti;

// ciclo forEach per ciclare l'array delle squadre
listaSquadre.forEach((element) => {

    puntiFatti = genaratoreNumeriRandom(100);

    falliSubiti = genaratoreNumeriRandom(20);

    element.puntifatti = puntiFatti;

    element.fallisubiti = falliSubiti;

});

console.log(listaSquadre);

// FUNZIONI
// funzione per generare numeri random
function genaratoreNumeriRandom(numero) {
  return Math.floor(Math.random() * numero) +1;
}
