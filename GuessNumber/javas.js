let randomNum = Math.floor(Math.random() * 100 + 1)
let start = document.getElementById("start")
let array = document.getElementById("array")
let result = document.getElementById("result");
let num = document.getElementById("num");
let rem = document.getElementById("rem");

let playGame = true;
let numGuess = 0;

let input;
document.getElementById("take").addEventListener('click', function () {
    if (playGame === true) {
        input = parseInt(num.value)
        CheckNumber(input)
    }
})

function CheckNumber(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess < 1 || guess > 100) {
        alert("Number should be between 1 and 100")
    }
    else {
        num.value = '';
        numGuess++;
        array.innerHTML += ` ${guess} `;
        rem.innerHTML = 10 - numGuess;
        checkPlay(guess);
    }
}

function checkPlay(guess) {
    if (numGuess === 9) {
        numGuess++;
        array.innerHTML += ` ${guess} `;
        rem.innerHTML = 10 - numGuess;
        endGame();
    }
    else {
        displayMessage(guess);
    }
}

function displayMessage(guess) {
    if (guess === randomNum) {
        result.innerHTML = "You guessed it right";
        endGame()
    }
    else if (guess < randomNum) {
        result.innerHTML = "Number is too low";
    }
    else if (guess > randomNum) {
        result.innerHTML = "Number is too high";
    }
}

function endGame() {
    num.setAttribute("disabled", "")
    playGame = false
    num.value = '';
    start.innerHTML = "start over"
}

start.addEventListener('click', function(){
    newGame();
})

function newGame() {
    start.innerHTML = ""
    num=10;
    num.removeAttribute("disabled")
    playGame = true
    array.innerHTML = ''
    result.innerHTML = "result"
    rem.innerHTML = 10
    randomNum = Math.floor(Math.random() * 100 + 1)
}