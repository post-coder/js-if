// chiediamo a due utenti la loro età
// controlliamo chi sia il più grande

const age1 = 27;
const age2 = 22;


if (age1 > age2) {

    document.getElementById("esito").innerHTML = "L'utente 1 è più grande dell'utente 2";

} else if (age1 < age2) {

    document.getElementById("esito").innerHTML = "L'utente 1 è più piccolo dell'utente 2";

} else {

    document.getElementById("esito").innerHTML = "L'utente 1 ha la stessa età dell'utente 2";

}

console.log("finito")