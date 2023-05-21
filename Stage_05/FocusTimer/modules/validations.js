import { controlsFactory } from "./controls.js";
import { timerFactory } from "./timer.js";
import { AlertError } from "./alert-error.js";

const dependenciesControls = controlsFactory({
    btnPlay  : document.querySelector('.play'),
    btnPause : document.querySelector('.pause'),
    btnSet   : document.querySelector('.set'),
    btnStop  : document.querySelector('.stop'),
});

const dependenciesTimer = timerFactory({
    displayMinutes : document.querySelector('.minutes'), 
    displaySeconds : document.querySelector('.seconds'), 
});

export function validationsFactory({
    displayMinutes,
    displaySeconds,
}){
    function validation() {
        if((displayMinutes.textContent == 0 && displaySeconds.textContent == 0 ) || 
           (displayMinutes.textContent == "" && displaySeconds.textContent == "")) {
            AlertError.open();
            return;
        }else{
            AlertError.close();
            dependenciesControls.timerPlay();
            dependenciesTimer.countdown();
        }    
    }

    return {
        validation,
    }
};