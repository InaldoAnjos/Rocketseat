// Variáveis

const btnPlay     = document.querySelector('.play');
const btnPause    = document.querySelector('.pause');
const btnSet      = document.querySelector('.set');
const btnStop     = document.querySelector('.stop');
const btnSoundOn  = document.querySelector('.sound-on');
const btnSoundOff = document.querySelector('.sound-off');

let   minutes;

// Events - DOM (Event-driven)

btnPlay.addEventListener('click', function() {
    btnPlay.classList.add('hide');
    btnPause.classList.remove('hide');
    btnSet.classList.add('hide');
    btnStop.classList.remove('hide');
});

btnPause.addEventListener('click', function() {
    btnPause.classList.add('hide');
    btnPlay.classList.remove('hide');
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
    btnPlay.classList.remove('hide');
    btnPause.classList.add('hide');
    btnStop.classList.add('hide');
    btnSet.classList.remove('hide');
});

btnSet.addEventListener('click', function() {
    document.querySelector('.container').classList.remove('open');
    document.querySelector('.container').classList.add('close');
    document.querySelector('modal-wrapper').classList.remove('close');
    document.querySelector('modal-wrapper').classList.add('open');
    document.querySelector('.modal').classList.remove('close');
    document.querySelector('.modal').classList.add('open');
});