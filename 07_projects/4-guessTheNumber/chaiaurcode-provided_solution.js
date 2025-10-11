let originialNumber = Math.round((Math.random())*100);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

const prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
        submit.addEventListener("click", (e)=> {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if(guess <1 || guess >100) {
        alert("Please enter a number between 1 and 100");

    }
    else {
        prevGuess.push(guess);
        if (numGuess>10) {
            displayGuess(guess);
            displayMessage(`Game Over...Random Number Was ${originialNumber}`);
            endGame();
        }

        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {

    if (guess===originialNumber) {
        displayMessage("You Guessed it right!!!");
        endGame();
    }
    else if (guess<originialNumber) {
        displayMessage("Number is Too Low!!!");
    }

    else if (guess>originialNumber) {
        displayMessage("Number is Too High!!!");
    }

}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML = `${prevGuess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e)=> {
         originialNumber = Math.round((Math.random())*100);
         prevGuess = [];
         numGuess = 1;
         guessSlot.innerHTML = "";
         remaining.innerHTML = `${11 - numGuess}`;
         userInput.removeAttribute("disabled");
         startOver.removeChild(p);
         playGame= true;

    })

}





