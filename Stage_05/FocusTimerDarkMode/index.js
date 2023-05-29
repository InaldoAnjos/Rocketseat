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

console.log(inputForest.value);

// Change mode

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

// Sound

cardForest.addEventListener('click', function(){
    sound.stopSound();
    sound.pressForest();
})

cardRain.addEventListener('click', function(){
    sound.stopSound();
    sound.pressRain();
})

cardMarket.addEventListener('click', function(){
    sound.stopSound();
    sound.pressMarket();
})

cardFire.addEventListener('click', function(){
    sound.stopSound();
    sound.pressFire();
})

btnStop.addEventListener('click', function(){
    sound.stopSound();
})

// inputForest.addEventListener('mousemove', function(){

// })