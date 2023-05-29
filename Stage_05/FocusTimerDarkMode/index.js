import { elements } from "./modules/elements.js";
import { Sound } from "./modules/sounds.js";

const {
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
    inputFire
} = elements;

const sound = Sound();

lightTheme.addEventListener('click', function(){
    tagHTML.classList.remove('light-mode');
    tagHTML.classList.add('dark-mode');
    lightTheme.classList.add('hide');
    darkTheme.classList.remove('hide');
})

darkTheme.addEventListener('click', function(){
    tagHTML.classList.remove('dark-mode');
    tagHTML.classList.add('light-mode');
    darkTheme.classList.add('hide');
    lightTheme.classList.remove('hide');
})
