let x = Math.floor(Math.random() * 5)
console.log(x)
document.head.lastElementChild.setAttribute("href", "stylesheets/style" + x + ".css");

document.querySelector(".menuHead").onclick = function () {
    document.querySelector("nav").classList.toggle("opened")
}

document.querySelector("nav a").onclick = function () {
    this.parentElement.classList.toggle("opened")
}