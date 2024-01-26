// controllare quale delle due parole dell'utente sia la più lunga
// (quella che abbia più lettere)


const word1 = prompt("inserisci la prima parola");
const word2 = prompt("inserisci la seconda parola");

// test
// const word1 = "pellicano";
// const word2 = "cane";

// controllo i valori delle proprietà "length" di ogni stringa
console.log(word1.length);
console.log(word2.length);

// controlliamo quale sia la parola più lunga?


if (word1.length > word2.length) {
    
    
    const difference =  word1.length - word2.length;


    if (difference === 1) {

        document.getElementById("esito").innerHTML = `
            La prima parola "${word1}" è più lunga della seconda parola "${word2}"
            di ${difference} carattere.
        `;

    } else {

        document.getElementById("esito").innerHTML = `
            La prima parola "${word1}" è più lunga della seconda parola "${word2}"
            di ${difference} caratteri.
        `;
        
    }


    

} else if (word1.length < word2.length)  {

    const difference =  word2.length - word1.length;


    document.getElementById("esito").innerHTML = `La prima parola "${word1}" è più corta della seconda parola "${word2}" di ${difference} caratteri`;


} else {
    document.getElementById("esito").innerHTML = "Le parole sono di lunghezza uguale";
}
