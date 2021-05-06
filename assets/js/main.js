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
var timer = 5;
var userArray = [];
var userNumber;
// User must insert his numbers one by one trying to match the number contained in the randomArray appeared in the first alert. 
// Let's set an interval for the countdown. Once the timer === 0 prompts can appear.
var interval = setTimeout(function(){
    if (timer === 0){
        // We set the array length to restrain the number of prompts and we push them into their own array.
        while (userArray.length < 5){
            userNumber = Number(prompt("Inserisci uno dei numeri che hai visto"))
            userArray.push(userNumber)
            
            // After 5 numbers have been inserted, software must reveal which and how many numbers have been guessed.
            var guessedNumbers = [];
            for (var i = 0; i < 5; i ++){
                var elem = userArray[i]
                if(randomArray.includes(elem)){
                    guessedNumbers.push(elem)
                }
            }
            console.log(guessedNumbers);
            alert("You guessed " + guessedNumbers.length + " numbers! And they are:" + guessedNumbers + "!")

            // We also verify the user can insert numbers only.
            if (isNaN(userNumber)){
                alert("You must insert a number")
                userArray.length--
            }
        } 
    } else {
        timer--
    }
} ,3000);





// for (var i = 0; i < randomArray.length; i ++){
//     if(userArray[i] === randomArray[i]){
//         guessedNumbers.push(userArray[i])
//     }
// }
// console.log(guessedNumbers);







