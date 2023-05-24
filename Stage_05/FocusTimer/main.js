import { elements } from "./modules/elements.js";
import { AlertError } from "./modules/alert-error.js";
import { timerFactory } from "./modules/timer.js";
import { controlsFactory } from "./modules/controls.js";
import { validationsFactory } from "./modules/validations.js";
import { Sound } from "./modules/sounds.js";
import { Events } from "./modules/events.js";

const {
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
  displaySeconds,
  elementAlert,
} = elements;

const dependenciesControls = controlsFactory({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
});

const dependenciesTimer = timerFactory({
  displayMinutes,
  displaySeconds,
  resetControls: dependenciesControls.resetControls,
});

const sound = Sound();

const dependenciesAlertError = AlertError({
    elementAlert
})

const dependenciesValidations = validationsFactory({
    displayMinutes,
    displaySeconds,
    dependenciesControls,
    dependenciesTimer,
    dependenciesAlertError
});

Events({
    dependenciesValidations,
    sound,
    dependenciesControls,
    dependenciesTimer
});

let minutes;
let seconds;

// Events - DOM (Event-driven)

form.onsubmit = (event) => {
  event.preventDefault(); // Evite o padrão do evento
  // (Nesse caso o evento padrão do submit seria enviar o form e recarregar a página!)

  minutes = inputMinutes.value;
  seconds = inputSeconds.value;

  dependenciesTimer.updateTimerDisplay(minutes, seconds);

  //Validando
  if (
    (inputMinutes.value == "" && inputSeconds.value == "") ||
    (inputMinutes.value == 0 && inputSeconds.value == 0)
  ) {
    elementAlert.open;
  } else {
    elementAlert.close;
  }
  // Verificando se o input veio vazio
  if (inputMinutes.value == "") {
    dependenciesTimer.updateTimerDisplay(0, seconds);
  }
  if (inputSeconds.value == "") {
    dependenciesTimer.updateTimerDisplay(minutes, 0);
  }
};
