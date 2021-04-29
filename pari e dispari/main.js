// PARI E DISPARI  chiediamo all'utente di scegliere pari o dispari ed un numero che vada da 1 a 5 
// e idem per il computer , se l'utente ad esempio sceglie pari e la somma delle due cifre è pari allora l'utente 
// // avrà vinto altrimenti avrà perso

// il gioco dovdra chiedere un numero da 1 a 6 sia all' utente che al computer 
// dopo di che si chiedera' all' utente di scegliere tra pari e dispari 
// e per utimo si farà la somma dei numeri prescelti 
// se l'utente dovesse scegliere pari e la somma dei due numeri è pari allora l'utente ha vinto
// se l'utente scegliesse pari e la somma uscisse dispari allorain questo caso l'utente ha perso

//----------------------------------------------
//DICHIARIAMO LE VARIABILI
//----------------------------------------------
var sceltaUtente = prompt("pari o dispari").toLowerCase();
document.getElementById("sceltaUtente").innerHTML = "HAI SCELTO : " + sceltaUtente;

if ((sceltaUtente != "pari")&&(sceltaUtente!= "dispari")) {


    alert("vorrei solo sapere se scegli pari o dispari nulla piu' ");
  
    location.reload()
}

else if (sceltaUtente == "pari") {


    alert("HAI SCELTO PARI BUONA FORTUNA")
} 

else if (sceltaUtente =="dispari") {


    alert(" HAI SCELTO DISPARI BUONA FORTUNA")
}

var numeroUtente = parseInt(prompt("scegli un numero da 1 a 6"));
if (numeroUtente) {
    alert("hai scelto  " + numeroUtente + " ORA VEDIAMO SE HAI AVUTO FORTUNA")
}
 
else if (isNaN(numeroUtente)){
    alert("ti ho chiesto un numero in cifre !! SEI UN UTONTO")

    location.reload()
}


document.getElementById("numeroUmano").innerHTML = "HAI SCELTO QUESTO NUMERO: " + numeroUtente;



var numeroPc = generaNumero(1,6);

document.getElementById("numeroPc").innerHTML = " IL PC HA QUESTO NUMERO: " + numeroPc;

var somma = numeroUtente+numeroPc;

document.getElementById("somma").innerHTML = "IL RISULTATO DELLE DUE CIFRE FA: " + somma;


var vittoria =vincitore(somma,sceltaUtente);




if (vittoria=="utente") {
    document.getElementById("vinto").innerHTML="HAI VINTO BRAVO "

    document.getElementById("vinto").style.color="blue";

    alert("COMPLIMENTI!!!! HAI VINTO SEI PROPRIO FORTUNATO")
} 

else {
    document.getElementById("perso").innerHTML="HAI PERSO PECCATO "

    document.getElementById("perso").style.color="red";

    alert("MI SPIACE SEI STATO SFORTUNATO , HAI PERSO")
}

if(over(numeroUtente)){
    alert("errore , i numeri da inserire vanno da 1 a 6 non da 0 a infinito")

    location.reload()
}



//-----------------------------------------------
// SPAZIO DESTINATO ALLE FUNZIONI DEL GIOCO
//-----------------------------------------------
// funzione per generare un numero random da 1 a 6
function generaNumero(min,max){
 return Math.floor(Math.random()*(max-min)+1);
}

//funzioni per il pari e dispari
function pari(numero){
if (numero%2==0) {
    return true
} else{
    return false
}
}

function dispari(numero){
    if (numero%2!=0) {
        return true
    } else{
        return false
    }
    }
// funzione per stabilire se l'utente ha vinto
function vincitore(somma, sceltaUtente){
if ((pari(somma)&&(sceltaUtente)=="pari")||(dispari(somma)&&(sceltaUtente)=="dispari")) {
    
    return "utente"
    
} else {
    return "computer"
}
}



function over(numero){
    if(numero > 6 || numero < 1){
        
       error = " errore"  
    }
    
    return error 
}