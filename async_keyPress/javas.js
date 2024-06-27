let key = document.getElementById("key")
let keycode = document.getElementById("keycode")
let code = document.getElementById("code")

window.addEventListener('keydown', function (e) {
    key.innerText = e.key === " " ? "space" : e.key;
    keycode.innerHTML = e.keyCode
    code.innerHTML = e.code
})