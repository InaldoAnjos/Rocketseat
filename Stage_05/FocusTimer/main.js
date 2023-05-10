import { AlertError } from "./modules/alert-error.js";

// Variáveis

const btnPlay        = document.querySelector('.play');
const btnPause       = document.querySelector('.pause');
const btnSet         = document.querySelector('.set');
const btnStop        = document.querySelector('.stop');
const btnSoundOn     = document.querySelector('.sound-on');
const btnSoundOff    = document.querySelector('.sound-off');
const btnClose       = document.querySelector('.button-close');
const btnOK          = document.getElementById('setTimer');

const form           = document.querySelector('form');
const inputMinutes   = document.getElementById('minutes');
const inputSeconds   = document.getElementById('seconds');

let   minutes;
let   seconds;
let   idTimeout;

const displayMinutes = document.querySelector('.minutes'); 
const displaySeconds = document.querySelector('.seconds'); 

// Functions

function resetControls() {
    btnPlay.classList.remove('hide');
    btnPause.classList.add('hide');
    btnStop.classList.add('hide');
    btnSet.classList.remove('hide');
}

function resetTimer() {
    updateTimerDisplay(0,0);
}

function timerPlay() {
    btnPlay.classList.add('hide');
    btnPause.classList.remove('hide');
    btnSet.classList.add('hide');
    btnStop.classList.remove('hide');
}

function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0');
    displaySeconds.textContent = String(seconds).padStart(2, '0');
}

function validation() {
    if((displayMinutes.textContent == 0 && displaySeconds.textContent == 0 ) || (displayMinutes.textContent == "" && displaySeconds.textContent == "")) {
        AlertError.open();
        return;
    }else{
        timerPlay();
        countdown();
    }    
}

function countdown() {
    idTimeout = setTimeout(function() {
        let seconds = Number(displaySeconds.textContent); 
        let minutes = Number(displayMinutes.textContent);
        
        
        if(seconds <= 0){
            seconds = 60;
            
            if (minutes <= 0 && seconds == 60) {
                resetControls();
                return;
            }
            --minutes;
        }
        
        updateTimerDisplay(minutes, String(--seconds));

        countdown();
    }, 1000)
}

// Events - DOM (Event-driven)

form.onsubmit = (event) => {
    event.preventDefault(); // Evite o padrão do evento 
    // (Nesse caso o evento padrão do submit seria enviar o form e recarregar a página!)
    
    minutes = inputMinutes.value;
    seconds = inputSeconds.value;
    
    updateTimerDisplay(minutes, seconds);
    
    // Validando
    if((inputMinutes.value == "" && inputSeconds.value == "") || (inputMinutes.value == 0 && inputSeconds.value == 0)) {
        AlertError.open();  
    }

    // Verificando se o input veio vazio
    if(inputMinutes.value == ""){
        updateTimerDisplay(0, seconds);
    }
    if(inputSeconds.value == ""){
        updateTimerDisplay(minutes, 0);
    }
}

btnPlay.addEventListener('click', function() {
        validation();    
});

btnPause.addEventListener('click', function() {
    btnPause.classList.add('hide');
    btnPlay.classList.remove('hide');
    clearTimeout(idTimeout);
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
    resetControls();
    resetTimer();
});

btnSet.addEventListener('click', function() {
    document.querySelector('.container').classList.add('close');
    document.querySelector('.modal-wrapper').classList.add('open');
    document.querySelector('.modal').classList.add('open');
});

btnClose.addEventListener('click', function() {
    document.querySelector('.container').classList.remove('close');
    document.querySelector('.modal-wrapper').classList.remove('open');
    document.querySelector('.modal').classList.remove('open');
});

btnOK.addEventListener('click', function() {
        document.querySelector('.container').classList.remove('close');
        document.querySelector('.modal-wrapper').classList.remove('open');
        document.querySelector('.modal').classList.remove('open');
});


