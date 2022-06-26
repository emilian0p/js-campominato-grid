/* TRACCIA
l'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella. */


// -prendo il parent nell'html
// -creo un array vuoto
// -creo le funzioni di cui ho bisogno  
// -for dei quadrati {
//    -creo il quadrato
//    -creo numeri random 
//    -nel quadrato mettiamo il numero random
//    -toggle
//    -append
//    -e pusho
//  }








const container = document.getElementById('container');

const blackList = [];

for (i=0; i<64; i++) {

    const square = createSquare();

const newNumber = createRandomNumber(blackList, 0, 63);

square.innerHTML = newNumber;

let squareNum = (newNumber % 2 === 0) ? 'green' : 'coral';
          /* function addToggle */
createToggle(square, squareNum);

container.append(square);

blackList.push(newNumber);
}



// functions


function createToggle(domElement, toggle) {
    domElement.addEventListener('click', function (){
        domElement.classList.toggle(toggle);
    })
}

function createSquare (){
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    return newSquare;

}

function createRandomNumber(blackList, min, max){
    let newRandomNumber;
    let validNumber = false;

    while( validNumber === false){
      
        newRandomNumber = Math.floor(Math.random() * (max + 1) - min) + min;
   
        if ( !blackList.includes(newRandomNumber)) {
         
            validNumber = true;
        }
    }
    return newRandomNumber;
}