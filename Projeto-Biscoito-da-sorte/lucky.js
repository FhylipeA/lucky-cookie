// VARIAVEIS
const firstTry = document.querySelector("#firstTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")



// EVENTOS
firstTry.addEventListener('click', changeScreen)
btnReset.addEventListener('click', changeScreen)


// FUNÇÕES
function prime() {
   changeScreen()
}

function second() {
   changeScreen()
}



function changeScreen() {
   screen1.classList.toggle("hide")
   screen2.classList.toggle("hide")
}

