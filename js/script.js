
// numeri a caso

// Math.random() crea un numero casuale da 0 a 1, 0 è incluso, 1 è escluso

// possiamo però moltiplicare il numero a nostro piacimento per gestirne il range

// l'utente prima sceglie se giocare per pari o dispari
// inserisce un numero casuale da 1 a 5
// il computer genera un numero da 1 a 5 casuale
// controlliamo se l'utente ha vinto o perso


const userChoice = prompt("pari o dispari?")
// test
// const userChoice = "dispari";

// test
const userNumber = Number(prompt("scegli un numero da 1 a 5"));
// const userNumber = 3;


const computerNumber = Math.floor( Math.random() * 5 + 1);

console.log("numero utente: ", userNumber);
console.log("numero computer: ", computerNumber);


// utilizzando un nuovo operatore: modulo

// console.log(16 % 2); // in questo caso ci da resto 0
// console.log(15 % 2); // in questo caso ci da resto 1
// il modulo ci da il resto della divisione algebrica tra i due numeri


const sum = userNumber + computerNumber;

console.log("sum",sum);


if (sum % 2 == 0) {

    // somma è pari

    document.getElementById('esito').innerHTML = "Pari";

    if (userChoice == "pari") {
        document.getElementById('vittoria').innerHTML = "Utente ha vinto!"
    } else {
        document.getElementById('vittoria').innerHTML = "Utente ha perso!"
    }

} else {

    // la somma è dispari
    document.getElementById('esito').innerHTML = "Dispari";


    if(userChoice == "dispari") {

        document.getElementById('vittoria').innerHTML = "Utente ha vinto!"

    } else {

        document.getElementById('vittoria').innerHTML = "Utente ha perso!"

    }


}