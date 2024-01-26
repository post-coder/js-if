
// se l'utente è maggiorenne visualizziamo un saluto pazzerello,
// altrimenti salutiamo in maniera matura

const age = prompt("Quanti anni hai?");

// se il valore dell'età è maggiore di 17, allora 
// salutiamo "Ciao xD"
// altrimenti salutiamo "Ciao persona non capace di intendere e volere per lo stato."



if (age > 17) {
    // azioni che vengono eseguite se la condizione dell'if
    // è vera.

    document.getElementById("saluto").innerHTML = "Ciao xD";
    console.log("l'utente è maggiorenne");

} else {
    // azioni che vengono eseguite se la condizione dell'if
    // è falsa.

    document.getElementById("saluto").innerHTML = "Ciao persona non capace di intendere e volere per lo stato.";

    console.log("l'utente non è maggiorenne");
}

