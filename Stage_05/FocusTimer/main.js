import { AlertError } from "./modules/alert-error.js";
import { timerFactory } from "./modules/timer.js"
import { controlsFactory } from "./modules/controls.js";
import { validationsFactory } from "./modules/validations.js";


// Variáveis

const btnPlay         = document.querySelector('.play');
const btnPause        = document.querySelector('.pause');
const btnSet          = document.querySelector('.set');
const btnStop         = document.querySelector('.stop');
const btnSoundOn      = document.querySelector('.sound-on');
const btnSoundOff     = document.querySelector('.sound-off');
const btnClose        = document.querySelector('.button-close');
const btnOK           = document.getElementById('setTimer');

const form            = document.querySelector('form');
const inputMinutes    = document.getElementById('minutes');
const inputSeconds    = document.getElementById('seconds');

let   minutes;
let   seconds;

const displayMinutes  = document.querySelector('.minutes'); 
const displaySeconds  = document.querySelector('.seconds'); 

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
    
    // Validando
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
});

btnPause.addEventListener('click', function() {
    dependenciesControls.pause();
    dependenciesTimer.hold();
});

btnSoundOn.addEventListener('click', function() {
    btnSoundOn.classList.add('hide');
    btnSoundOff.classList.remove('hide');
});

btnSoundOff.addEventListener('click', function() {
    btnSoundOff.classList.add('hide');
    btnSoundOn.classList.remove('hide');
});

btnStop.addEventListener('click', function() {
    dependenciesControls.resetControls();
    dependenciesTimer.resetTimer();
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


