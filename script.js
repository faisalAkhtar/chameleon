let all = [{
    "name": "Faisal Akhtar",
    "link": "https://faisalakhtar.github.io",
    "style": "style0.css"
}, {
    "name": "Faisal Akhtar",
    "link": "https://faisalakhtar.github.io",
    "style": "style1.css"
}, {
    "name": "Shubhangi Goyal",
    "link": "https://goyalshubhangi.github.io",
    "style": "style2.css"
}]

let x = Math.floor(Math.random() * all.length)

console.log("Author : " + all[x].name)
console.log("Link : " + all[x].link)
console.log("Stylesheet : " + all[x].style)

document.head.lastElementChild.setAttribute("href", "stylesheets/style" + x + ".css");

document.querySelector("footer .col3 a").innerHTML = all[x].name
document.querySelector("footer .col3 a").href = all[x].link
