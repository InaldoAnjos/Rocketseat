import { controlsFactory } from "./controls.js";

const dependenciesControls = controlsFactory({
    btnPlay  : document.querySelector('.play'),
    btnPause : document.querySelector('.pause'),
    btnSet   : document.querySelector('.set'),
    btnStop  : document.querySelector('.stop'),
});

let idTimeout = null;

export function timerFactory({
    /* Dependencias das funções desse arquivo (timer.js) */
    displayMinutes,
    displaySeconds,
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
}) {

    function updateTimerDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');
    }
    
    function countdown() {
        idTimeout = setTimeout(function() {
            let seconds = Number(displaySeconds.textContent); 
            let minutes = Number(displayMinutes.textContent);

        if(seconds <= 0){
            seconds = 60;
            
            if (minutes <= 0 && seconds == 60) {
                dependenciesControls.resetControls();
                return;
            }
            --minutes;
        }
        
        updateTimerDisplay(minutes, String(--seconds));
        
        countdown()
        }, 1000)
    }
    
    function resetTimer() {
        updateTimerDisplay(0,0);
        clearTimeout(idTimeout);
    }

    function hold() {
        clearTimeout(idTimeout);
    }

    return { 
        resetTimer,
        updateTimerDisplay,
        countdown,
        hold
    }
    
}
