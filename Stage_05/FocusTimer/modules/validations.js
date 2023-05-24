export function validationsFactory({
    displayMinutes,
    displaySeconds,
    dependenciesControls,
    dependenciesTimer,
    dependenciesAlertError
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
        }    
    }

    return {
        validation,
    }
};