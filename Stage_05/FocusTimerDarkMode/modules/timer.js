let idTimeout = null;

export function Timer({
    displayMinutes,
    displaySeconds,
    sound
}){

    let minutes = Number(displayMinutes.textContent);
    let seconds = Number(displaySeconds.textContent);

    function increaseMinutes(){
        minutes += 5;
        displayMinutes.textContent = String(minutes).padStart(2, '0');
    }

    function decreaseMinutes(){
        if(minutes < 5){
            minutes = 0;
            displayMinutes.textContent = String(minutes).padStart(2, '0');
        }else{
            minutes -= 5;
            displayMinutes.textContent = String(minutes).padStart(2, '0');
        }
    }

    function countdown() {
        idTimeout = setTimeout(function() {
            if(seconds <= 0){
                seconds = 10;
                if(minutes <=0 && seconds == 10) {
                    timerReset();
                    sound.stopSound();
                    return;
                }
                --minutes;
            }
            updateTimerDisplay(minutes, String(--seconds));
            countdown();
        }, 1000)
    }


    function updateTimerDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');
    }

    function timerReset(){
        updateTimerDisplay(0,0);
        minutes = 0;
    }

    return {
        increaseMinutes,
        decreaseMinutes,
        timerReset,
        countdown
    }

}