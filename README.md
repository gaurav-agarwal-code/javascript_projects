# Creating some small javascripts projects
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