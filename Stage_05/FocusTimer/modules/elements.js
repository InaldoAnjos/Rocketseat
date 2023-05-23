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

const displayMinutes  = document.querySelector('.minutes'); 
const displaySeconds  = document.querySelector('.seconds');

export {
      btnPlay,
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
}