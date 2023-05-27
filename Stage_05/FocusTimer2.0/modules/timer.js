let idTimeout = null;

export function timerFactory({
  displayMinutes,
  displaySeconds,
  sound
}) {

  function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0');
    displaySeconds.textContent = String(seconds).padStart(2, '0');
  }

  function countdown() {
    idTimeout = setTimeout(function() {
      let minutes = Number(displayMinutes.textContent);
      let seconds = Number(displaySeconds.textContent);

      if(seconds <= 0){
        seconds = 60;
        if(minutes <= 0 && seconds == 60) {
          resetTimer();
          sound.soundStop();
          
          return;
        }
        --minutes;
      }

      updateTimerDisplay(minutes, String(--seconds));

      countdown();
    }, 1000)
  } 

  function resetTimer() {
    updateTimerDisplay(0,0);
    clearTimeout(idTimeout);
  }
  
  return {
    updateTimerDisplay,
    countdown,
    resetTimer
  }
}