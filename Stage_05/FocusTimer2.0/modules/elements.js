// Timer
const displayMinutes = document.querySelector('#minutes');
const displaySeconds = document.querySelector('#seconds');

// Timer buttons
const btnPlay = document.querySelector('#play');
const btnStop = document.querySelector('#stop');
const btnMore = document.querySelector('#more');
const btnLess = document.querySelector('#less');

// Theme cards

const forestCard  = document.querySelector('.forest');
const rainCard    = document.querySelector('.rain');
const marketCard  = document.querySelector('.market');
const fireCard    = document.querySelector('.fire');

// Card
const elementCard = document.querySelectorAll('.card');

export const elements = {
  displayMinutes,
  displaySeconds,
  btnPlay,
  btnStop,
  btnMore,
  btnLess,
  forestCard,
  rainCard,
  marketCard,
  fireCard,
  elementCard
}