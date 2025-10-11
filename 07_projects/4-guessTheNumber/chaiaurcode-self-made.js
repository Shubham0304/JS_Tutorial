const form = document.querySelector("form");
let maxAttempts = 10;
const originialNumber = Math.round((Math.random())*100);
console.log(originialNumber);
const guesses = [];
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const currentGuess = parseInt(document.querySelector("#guessField").value);
    if ( guesses.length >=10) {
            document.querySelector(".lowOrHi").innerHTML =`You have run out of guesses sorry`;
    }
    else {
        guesses.push(currentGuess);
        if (currentGuess == originialNumber)
        {
        document.querySelector(".lowOrHi").innerHTML  = `Wow!! You guessed it right! the number was ${originialNumber}`
            
        }
        else if(currentGuess>originialNumber) {
            document.querySelector(".lowOrHi").innerHTML = `Your guess is higher than the number!`;
            maxAttempts=maxAttempts-1;
            document.querySelector("#guessField").value = 0;
            
        }

        else if(currentGuess<originialNumber) {  
            document.querySelector(".lowOrHi").innerHTML = `Your guess is lower than the number!`;
            maxAttempts=maxAttempts-1;
            document.querySelector("#guessField").value = 0;

        }
        document.querySelector(".guesses").innerHTML = `${guesses}`;
        document.querySelector(".lastResult").innerHTML = `${maxAttempts}`;




    }
})