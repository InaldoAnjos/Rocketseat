export function validationsFactory({
    displayMinutes,
    displaySeconds,
    dependenciesControls,
    dependenciesTimer,
    dependenciesAlertError,
    sound
}){
    function validation() {
        if((displayMinutes.textContent == 0 && displaySeconds.textContent == 0 ) || 
           (displayMinutes.textContent == "" && displaySeconds.textContent == "")) {
            dependenciesAlertError.open();
            return;
        }else{
            dependenciesAlertError.close();
            dependenciesControls.timerPlay();
            dependenciesTimer.countdown();
            sound.bgAudioStart();
        }    
    }

    return {
        validation,
    }
};