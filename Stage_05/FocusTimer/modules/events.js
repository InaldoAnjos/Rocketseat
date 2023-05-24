import { elements } from "./elements.js";

const {
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    btnSoundOn,
    btnSoundOff,
    btnClose,
    btnOK
} = elements;

export function Events({
    dependenciesValidations,
    sound,
    dependenciesControls,
    dependenciesTimer,
    inputMinutes, 
    inputSeconds
}){
    btnPlay.addEventListener('click', function() {
        dependenciesValidations.validation();
        sound.pressButton();
        console.log(inputMinutes.value);
        if(inputMinutes.value && inputSeconds.value != 0){
            sound.bgAudioStart();
        }
    });
    
    btnPause.addEventListener('click', function() {
        dependenciesControls.pause();
        dependenciesTimer.hold();
        sound.pressButton();
        sound.bgAudioPause();
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
        sound.bgAudioPause();
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

    return {

    }
}

