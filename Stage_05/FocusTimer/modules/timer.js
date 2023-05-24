let idTimeout = null;

export function timerFactory({
    /* Dependencias das funções desse arquivo (timer.js) */
    displayMinutes,
    displaySeconds,
    resetControls,
    sound
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
                resetControls();
                sound.timeEnd();
                sound.bgAudioPause();
                
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
        sound.bgAudioPause();
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
