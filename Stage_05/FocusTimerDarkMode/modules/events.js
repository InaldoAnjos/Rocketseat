import { elements } from "./elements.js"; 
import { Timer } from "./timer.js";

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
    inputFire,
} = elements;

const timer = Timer({
    displayMinutes,
    displaySeconds,
})

export function Events({
    sound
}) {

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

// Timer

btnPlay.addEventListener('click', function(){
    timer.countdown();
})

btnStop.addEventListener('click', function(){
    timer.timerReset();
    sound.stopSound();
})

btnMore.addEventListener('click', function(){
    timer.increaseMinutes();
})

btnLess.addEventListener('click', function(){
    timer.decreaseMinutes();
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

inputForest.addEventListener('input', function(){
    sound.setVolume(sound.forestAudio, inputForest);
})
inputRain.addEventListener('input', function(){
    sound.setVolume(sound.rainAudio, inputRain);
})
inputMarket.addEventListener('input', function(){
    sound.setVolume(sound.marketAudio, inputMarket);
})
inputFire.addEventListener('input', function(){
    sound.setVolume(sound.forestAudio, inputFire);
})
    return {

    }

}