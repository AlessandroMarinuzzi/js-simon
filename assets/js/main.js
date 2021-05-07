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
console.log(randomArray);
alert("Remember these numbers:" + randomArray);

// Let's initialize a 30 seconds timer with a Var and an array to push the userNumbers into it.
var userArray = [];
var userNumber;
var i = 0;
// User must insert his numbers one by one trying to match the number contained in the randomArray appeared in the first alert. 
// Let's set an interval for the countdown. Once the timer === 0 prompts can appear.
setTimeout(function(){
    
        // We set the array length to restrain the number of prompts and we push them into their own array.
        while (i < 5){
            userNumber = Number(prompt("Inserisci uno dei numeri che hai visto"))
            if (isNaN(userNumber)){
                alert("Insert numbers only")
                i--
            }
            if(randomArray.includes(userNumber)){
                userArray.push(userNumber)
            } 
            i++
            // After 5 numbers have been inserted, software must reveal which and how many numbers have been guessed.
        } 
        alert("You guessed " + userArray.length + "numbers! And they are:" + userArray) 
  
} ,30000);

// We also verify the user can insert numbers only



// ************************ Ask Fabio for arrays comparing ***************************
// for (var i = 0; i < randomArray.length; i ++){
//     if(userArray[i] === randomArray[i]){
    //         guessedNumbers.push(userArray[i])
//     }
// }
// console.log(guessedNumbers);
// var guessedNumbers = [];
// for (var i = 0; i < 5; i ++){
//     var elem = userArray[i]
//     if(randomArray.includes(elem)){
//         guessedNumbers.push(elem)
//     }
// }
// ****************************************************************************************







