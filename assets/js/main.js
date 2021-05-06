// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Alert displays 5 random numbers and pushs them into an array.
var randomArray = [];
while(randomArray.length < 5){
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    if(randomArray.indexOf(randomNumber) === -1) randomArray.push(randomNumber);
}
alert("Remember these numbers:" + randomArray);

// Let's initialize a 30 seconds timer with a Var and an array to push the userNumbers into it.
var timer = 5;
var userArray = [];
// User must insert his numbers one by one trying to match the number contained in the randomArray. 
// Let's set an interval.
var interval = setInterval(function(){
    if (timer === 0){
        for (i = 0; i < 5; i++){
            userNumber = Number(prompt("Inserisci uno dei numeri che hai visto"))
        } 
    } else {
        timer--
    }
} ,1000)

