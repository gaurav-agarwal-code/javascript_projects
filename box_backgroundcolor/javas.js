let body = document.querySelector("body")

document.addEventListener("click", (box) => {
    body.style.backgroundColor = box.target.style.backgroundColor;
});