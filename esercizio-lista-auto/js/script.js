// lista auto
const carList = [
    {
        nome: 'Ferrari',
        color: '#FF0000',
        paese: 'italia'
    },
    {
        nome: 'McLaren',
        color: '#F87217',
        paese: 'inghilterra'
    },
    {
        nome: 'Pagani',
        color: '#736F6E',
        paese: 'italia'
    },
    {
        nome: 'Aston Martin',
        color: '#347135',
        paese: 'inghilterra'
    },
    {
        nome: 'Lamborghini',
        color: '#87F717',
        paese: 'italia'
    },
    {
        nome: 'Jaguar',
        color: '#306EFF',
        paese: 'inghilterra'
    },
    {
        nome: 'Maserati',
        color: '#000',
        paese: 'italia'
    },
    {
        nome: 'Lotus',
        color: '#FFFC17',
        paese: 'inghilterra'
    }
];

// stampare la lista di auto
const container = document.getElementById('container');

copiaArray(carList, container);

// divido le auto per paese
const autoItaliane = carList.filter((element) => element.paese === 'italia');

const autoInglesi = carList.filter((element) => element.paese === 'inghilterra');

// stampo le auto divise per paese
const containerItalia = document.getElementById('italia');

const containerInghilterra = document.getElementById('inghilterra');

copiaArray(autoItaliane, containerItalia);

copiaArray(autoInglesi, containerInghilterra);

// creo una lista con prima le auto italiane e poi quelle inglesi
const nuovaLista = [...autoItaliane,...autoInglesi];

// stampo la lista con prima le auto italiane e poi quelle inglesi
const newContainer = document.getElementById('new-container')

copiaArray(nuovaLista, newContainer);

// FUNZIONI
// funzione per copiare array
function copiaArray(nomeArray, nomeContainer) {
    
    nomeArray.forEach((element) => {

        let content = nomeContainer.innerHTML;
    
        nomeContainer.innerHTML = `${content}
            <div>
                <i class="fas fa-car" style="color:${element.color}"></i>
                ${element.nome}
            </div>
        `
    });

};