# Creating some small javascripts projects
**Projects**
1.  [Background color as box color](#project-1)
2.  [BMI calculator](#project-2)
3.  [Current time display](#project-3)
4.  [Guess the number Game](#project-4)
5.  [Random background color at at 0.5 sec](#project-5)
6.  [Keypress information](#project-6)
7.  [XML Fetch github photo and followers](#project-7)
8.  More
   
- ## Project 1
Change backgound color as of box color upon clicking on the boxes<br>
**HTML**
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .box {
            border: 3px solid black;
            height: 100px;
            width: 100px;
            display: inline-block;
            background-color: #212121;
            margin: 5px;
        }
    </style>
</head>
<body style="background-color: #212121; color: white;">
    <div class="boxes">
        <div class="box" style="background-color:aqua"><p></p></div>
        <div class="box" style="background-color:blue"></div>
        <div class="box" style="background-color:antiquewhite"></div>
        <div class="box" style="background-color:aquamarine"></div>
    </div>
    <script src="javas.js"></script>
</body>
</html>
```
**SCRIPT**
```js
let body = document.querySelector("body")

document.addEventListener("click", (box) => {
    body.style.backgroundColor = box.target.style.backgroundColor;
});
```

- ## Project 2
Calculate BMI by taking weight and height<br>
**HTML**
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <style>
        body{
            overflow: hidden;
            background-color: black;
            color: red;
            height: 95vh;
            width: 100%;
        }
        h1{
            position: absolute;
            top: 30%;
        }
        div {
            background-color: lightcoral;
            color: bisque;
            border-radius: 15px;
            padding: 20px;
            position: absolute;
            top: 30%;
        }
        *{
            padding: 5px;
        }
        input{
            color: black;
        }
    </style>
</head>
<body>
    <h1>Check your BMI here</h1>
    <div>
        <table>
            <tr><th colspan="2"><h2>Enter your details here</h2></th></tr>
            <tr><td><label for="weight">Enter your weight(in kg):</label></td><td><input id="weight"></td></tr>
            <tr><td><label for="height">Enter your height(in ft):</label></td><td><input id="height"></td></tr>
            <tr><td id="output" style="color:black">BMI: </td></tr>
            <tr><td colspan="2"><button id="check">Check</button></td></tr>
        </table>
    </div>
</body>
<script src="javas.js"></script>
</html>

```
**SCRIPT**
```js
document.getElementById("check").addEventListener('click', function(){
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    console.log(height,weight);
    
    height = height * 3.048;
    let bmi = weight / (height * height);

    document.getElementById("output").innerHTML += bmi;
    
})
```

- ## Project 3
Display current time at start<BR>
**HTML**
```JS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get current time</title>
    <style>
        body{
            background-color: #212121;
            color: aliceblue;
            border: 1px solid blue;
        }
        div{
            position: absolute;
            top: 50vh;
            left:50vw;
            color: brown;
            background-color: orange;
            padding: 20px 40px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div id="time">Time</div>
</body>
<script src="javas.js"></script>
</html>
```
**SCRIPT**
```JS
const timeFunc = function () {
    let t = new Date().toLocaleTimeString()
    document.getElementById("time").innerHTML = t;
}
setInterval(timeFunc, 1000);
```

-   ## Project 4 
You have 10 chances to guess the correct number<br>
**HTML**
```JS
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the number</title>
    <style>
        body {
            background-color: #212121;
            color: black;
        }

        div {
            position: absolute;
            top: 38vh;
            left: 38vw;
            padding: 10px;
            border-radius: 10px;
            background-color: darkgrey;
            border: 2px solid white;
        }

        button {
            padding: 10px;
            border-radius: 8px;
            width: 100%;
        }
    </style>
</head>

<body>
    <div>
        <table>
            <tr>
                <th colspan="2">
                    <h2 style="color: black;">Lets play</h2>
                </th>
            </tr>
            <tr>
                <td>Enter number:</td>
                <td><input id='num'></td>
            </tr>
            <tr>
                <td>Guess array:</td>
                <td>
                    <p id="array"></p>
                </td>
            </tr>
            <tr>
                <td>Remaining chances:</td>
                <td>
                    <p id="rem">10</p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue;text-align:center">
                    <p id="result">result</p>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align:center"><button id="take">Submit</button></td>
            </tr>
            <tr>
                <td colspan="2" style="background-color: aquamarine;text-align:center;color:brown"><label
                        id="start"></label></td>
            </tr>
        </table>
    </div>
</body>
<Script src="javas.js"></Script>

</html>
```
**SCRIPT**
```JS
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
```

-   ## Project 5
Get random color for background on pressing start button. Stop it as you wish<br>
**HTMl**
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random background color</title>
    <style>
        *{
            margin: 10px;
        }
        button{
            padding: 10px 20px;
        }
    </style>
</head>
<body>
    <h1>Background color change on click</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script src="javas.js"></script>
</html>
```
**SCRIPT**
```js
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let hex = "0123456789ABCDEF";

function newColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeColor = function () {
    document.body.style.backgroundColor = newColor();
}

let interval;
start.addEventListener('click', function () {
    if (!interval) {
        interval = setInterval(changeColor, 500);
    }
});

stop.addEventListener('click', function () {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});
```

- ## Project 6
Get the details of the key that is being pressed on this window<br>
**HTML**
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keypress details</title>
    <style>
        body{
            background-color: #212121;
            color: aliceblue;
        }
        table,tr,td,th{
            border: 2px solid black;
            padding: 10px;
            border-collapse: collapse;
            border-color: beige;
            color: orange;
        }
        div{
            position: absolute;
            top: 45vh;
            left: 40vw;
        }
    </style>
</head>
<body>
    <div>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td id="key"></td>
                <td id="keycode"></td>
                <td id="code"></td>
            </tr>
        </table>
    </div>
</body>
<script src="javas.js"></script>
</html>
```
**Script**
```js
let key = document.getElementById("key")
let keycode = document.getElementById("keycode")
let code = document.getElementById("code")

window.addEventListener('keydown', function (e) {
    key.innerText = e.key === " " ? "space" : e.key;
    keycode.innerHTML = e.keyCode
    code.innerHTML = e.code
})
```

- ## Project 7
Fetch github photo and followers by providing username (Coming soon)