// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

// array di partenza
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// richesta numero iniziale
var numeroMin = parseInt(prompt("scrivi un numero da 0 a 5"));

// richesta numero finale
var numeroMax = parseInt(prompt("scrivi un numero da 0 a 5"));

// ciclo filter per filtrare dall'array di partenza i nomi compresi tra i numeri inseriti dall'utente e per inserirli in un nuovo array
const newArray = myArray.filter((element, index) => index >= numeroMin && index <= numeroMax);

console.log(newArray);
