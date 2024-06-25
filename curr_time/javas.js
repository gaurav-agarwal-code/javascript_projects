const timeFunc = function () {
    let t = new Date().toLocaleTimeString()
    document.getElementById("time").innerHTML = t;
}
setInterval(timeFunc, 1000);