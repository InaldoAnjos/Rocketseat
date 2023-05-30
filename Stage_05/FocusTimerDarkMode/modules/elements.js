// Variables

// Tag HTML
const tagHTML   = document.querySelector('html');

// Theme
const lightTheme = document.querySelector('.light');
const darkTheme  = document.querySelector('.dark');

// Timer
const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');

// Buttons
const btnPlay     = document.querySelector('.play');
const btnStop     = document.querySelector('.stop');
const btnMore     = document.querySelector('.more');
const btnLess     = document.querySelector('.less');

// Card
const cards       = document.querySelectorAll('.card');
const cardForest  = cards[0];
const cardRain    = cards[1];
const cardMarket  = cards[2];
const cardFire    = cards[3];

// Inputs
const inputForest = document.querySelector('#forest');
const inputRain   = document.querySelector('#rain');
const inputMarket = document.querySelector('#market');
const inputFire   = document.querySelector('#fire');

// Variável
let idTimeout;

export const elements = {
    tagHTML,
    lightTheme,
    darkTheme,
    displayMinutes,
    displaySeconds,
    btnPlay,
    btnStop,
    btnMore,
    btnLess,
    cardForest,
    cardRain,
    cardMarket,
    cardFire,
    inputForest,
    inputRain,
    inputMarket,
    inputFire,
    idTimeout
}