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
