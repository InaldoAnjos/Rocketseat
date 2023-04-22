//Variáveis
let randomNumber = Math.floor(Math.random() * 30);
console.log(randomNumber);
const listPhrases = document.querySelectorAll(".phrases p");

//listPhrases[randomNumber].classList.toggle("hide");
// OU
document.querySelectorAll(".phrases p")[randomNumber].classList.toggle("hide");

// Eventos
document.querySelector("#cookie").addEventListener('click', handleCookieClick);
document.querySelector("#other-cookie").addEventListener('click', handleOtherCookieClick);
document.querySelector("#back-button").addEventListener('click', toggleScreen);

function handleCookieClick() {
    toggleScreen();
}

function handleOtherCookieClick() {
    document.querySelectorAll(".phrases p")[randomNumber].classList.toggle("hide");
    randomNumber = Math.floor(Math.random() * 30);
    document.querySelectorAll(".phrases p")[randomNumber].classList.toggle("hide");
}

function toggleScreen() {
    document.querySelector(".main-screen").classList.toggle("hide");
    document.querySelector(".secondary-screen").classList.toggle("hide");
}