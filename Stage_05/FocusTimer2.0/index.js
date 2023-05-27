import { elements } from "./modules/elements.js";
import { timerFactory } from "./modules/timer.js";
import { Sound } from "./modules/sounds.js";

const {
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
} = elements;

const sound = Sound();

const dependenciesTimer = timerFactory({
  displayMinutes,
  displaySeconds,
  sound
});

let minutes = Number(displayMinutes.textContent);
let status = 0;

// Eventos
btnPlay.addEventListener('click', function(){
  if(status == 0){
    dependenciesTimer.countdown();
  }
  status++;
})

btnStop.addEventListener('click', function(){
  dependenciesTimer.resetTimer();
  minutes = 0;
  status = 0;
  sound.soundStop();
})

btnMore.addEventListener('click', function(){
  minutes += 5;
  displayMinutes.textContent = String(minutes).padStart(2, '0');
})

btnLess.addEventListener('click', function(){
  if(minutes < 5){
    minutes = 0;
    displayMinutes.textContent = String(minutes).padStart(2, '0');
  }else{
    minutes -= 5;
    displayMinutes.textContent = String(minutes).padStart(2, '0');
  }
})

forestCard.addEventListener('click', function(){
  sound.soundStop();
  sound.pressForest();
  elementCard[0].classList.add('Active');
  elementCard[1].classList.remove('Active');
  elementCard[2].classList.remove('Active');
  elementCard[3].classList.remove('Active');
})

rainCard.addEventListener('click', function(){
  sound.soundStop();
  sound.pressRain();
  elementCard[1].classList.add('Active');
  elementCard[0].classList.remove('Active');
  elementCard[2].classList.remove('Active');
  elementCard[3].classList.remove('Active');
})

marketCard.addEventListener('click', function(){
  sound.soundStop();
  sound.pressMarket();
  elementCard[2].classList.add('Active');
  elementCard[0].classList.remove('Active');
  elementCard[1].classList.remove('Active');
  elementCard[3].classList.remove('Active');
})

fireCard.addEventListener('click', function(){
  sound.soundStop();
  sound.pressFire();
  elementCard[3].classList.add('Active');
  elementCard[0].classList.remove('Active');
  elementCard[1].classList.remove('Active');
  elementCard[2].classList.remove('Active');
})