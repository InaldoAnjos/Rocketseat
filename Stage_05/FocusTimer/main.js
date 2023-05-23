import { AlertError } from "./modules/alert-error.js";
import { timerFactory } from "./modules/timer.js"
import { controlsFactory } from "./modules/controls.js";
import { validationsFactory } from "./modules/validations.js"; 
import Sound from "./modules/sounds.js";
import { btnPlay,
         btnPause,
         btnSet,
         btnStop,
         btnSoundOn,
         btnSoundOff,
         btnClose,
         btnOK,
         form,
         inputMinutes,
         inputSeconds,
         displayMinutes,
         displaySeconds
        } from "./modules/elements.js";

let   minutes;
let   seconds;

const sound = Sound();

const dependenciesValidations = validationsFactory({
    displayMinutes,
    displaySeconds,
    btnPlay,
    btnPause,
    btnSet,
    btnStop
});

const dependenciesControls = controlsFactory({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
});

const dependenciesTimer = timerFactory({
    displayMinutes,
    displaySeconds,
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
});

// Events - DOM (Event-driven)

form.onsubmit = (event) => {
    event.preventDefault(); // Evite o padrão do evento 
    // (Nesse caso o evento padrão do submit seria enviar o form e recarregar a página!)
    
    minutes = inputMinutes.value;
    seconds = inputSeconds.value;

    dependenciesTimer.updateTimerDisplay(minutes, seconds);
    
    //Validando
    if((inputMinutes.value == "" && inputSeconds.value == "") || (inputMinutes.value == 0 && inputSeconds.value == 0)) {
        AlertError.open();  
    }
    else {
        AlertError.close();
    }
    // Verificando se o input veio vazio
    if(inputMinutes.value == ""){
        dependenciesTimer.updateTimerDisplay(0, seconds);
    }
    if(inputSeconds.value == ""){
        dependenciesTimer.updateTimerDisplay(minutes, 0);
    }
}

btnPlay.addEventListener('click', function() {
    dependenciesValidations.validation();
    sound.pressButton();
});

btnPause.addEventListener('click', function() {
    dependenciesControls.pause();
    dependenciesTimer.hold();
    sound.pressButton();
});

btnSoundOn.addEventListener('click', function() {
    btnSoundOn.classList.add('hide');
    btnSoundOff.classList.remove('hide');
    sound.bgAudioPause();
});

btnSoundOff.addEventListener('click', function() {
    btnSoundOff.classList.add('hide');
    btnSoundOn.classList.remove('hide');
    sound.bgAudioStart();
});

btnStop.addEventListener('click', function() {
    dependenciesControls.resetControls();
    dependenciesTimer.resetTimer();
    sound.pressButton();
});

btnSet.addEventListener('click', function() {
    dependenciesControls.set();
});

btnClose.addEventListener('click', function() {
    dependenciesControls.close();
});

btnOK.addEventListener('click', function() {
    dependenciesValidations.validation();
    dependenciesControls.confirmtime();    
});


