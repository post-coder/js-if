
// creiamo un OGGETTO 

const myTime = new Date();
// questo oggetto myTime contiene tutte le informazioni temporali
//  dell'istante in cui è stata eseguita quella determinata riga di codice

/*

quanto manca: utilizzando le funzioni dell'oggetto Date,
 stabilire l'ora attuale e attraverso una operazione matematica 
 stabilire i minuti mancanti allo scoccare della prossima ora.
*/

// "sono le xx:yy, mancano  tot minuti alle 12"

const currentHour = myTime.getHours();
const currentMinutes = myTime.getMinutes();

const minutesLeft = 60 - currentMinutes;

// console.log("minuti mancanti", minutesLeft);

let timing = `Sono le ${currentHour}:${currentMinutes}, mancano ${minutesLeft} minuti alle ${currentHour + 1}:00`;

// console.log(timing);

document.getElementById("esito").innerHTML = timing;