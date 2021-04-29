/*
creiamo un programmino dove l'utente inserisce una parola 
e tramite una funzione controlliamo se essa risulti o meno essere una palindroma.

UNA PALINDROMA è UNA PAROLA CHE SI PUO' LEGGERE 
SIA DA DESTRA CHE DA SINISTRA SENZA CHE ESSA CAMBI
ESEMPIO OSSO ORO ARA AMA ETC 

*/

// chiediamo all' utente una qualsiasi parola 
// var parola = prompt("inserisci una parola e verifica se sia palindroma o meno");
// console.log(parola);

// dividiamo la parola in singoli caratteri in un array 
// var parolaDivisa = parola.split("");
// console.log(parolaDivisa );
// // ora giriamo la parola

// var parolaGirata = parolaDivisa.reverse();
// console.log(parolaGirata);

// var parolaInvertita= parolaGirata.join("");


// if(parola == parolaInvertita){
//     alert("la tua parola è palindroma")
// } else(alert("la tua parola non è palindroma"))



// seconda soluzione con funzione 



var parola = prompt("inserisci una parola ").toUpperCase();
console.log(parola);

var parolareverse = parolaGirata(parola);


if(parola == parolareverse){
    document.getElementById("parola").innerHTML= parola + " : BRAVO LA TUA PAROLA è PALINDROMA "
    alert("la tua parola è palindroma")
} else {
    document.getElementById("parola").innerHTML= parola + " : PECCATO  LA TUA PAROLA NON è PALINDROMA "
    alert("non è palindroma")
}

function parolaGirata(parola){
var parolareverse ="";

for(var i = parola.length -1; i>=0; i--){
parolareverse+=parola[i];

}
return parolareverse;


}


