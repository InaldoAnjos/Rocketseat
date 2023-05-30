import { elements } from "./modules/elements.js";
import { Timer } from "./modules/timer.js";
import { Sound } from "./modules/sounds.js";
import { Events } from "./modules/events.js";

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
    idTimeout
} = elements;

const sound = Sound();

const timer = Timer({
    idTimeout,
    displayMinutes,
    displaySeconds,
    sound
});

Events({
    timer,
    sound
});