import { controlsFactory } from "./controls.js";

const dependenciesControls = controlsFactory({});

export function timerFactory({
    /* Dependencias das funções desse arquivo (timer.js) */
    displayMinutes,
    displaySeconds,
    idTimeout,
}) {
        
    function resetTimer() {
        updateTimerDisplay(0,0);
    }
    
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
        
        countdown();
        }, 1000)
    }

    return { 
        resetTimer,
        updateTimerDisplay,
        countdown
    }


}