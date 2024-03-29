export function controlsFactory({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
}) {

    function timerPlay() {
        btnPlay.classList.add('hide');
        btnPause.classList.remove('hide');
        btnSet.classList.add('hide');
        btnStop.classList.remove('hide');
    }
    
    function pause() {
        btnPause.classList.add('hide');
        btnPlay.classList.remove('hide');
    }

    function set() {
        document.querySelector('.container').classList.add('close');
        document.querySelector('.modal-wrapper').classList.add('open');
        document.querySelector('.modal').classList.add('open');
    }

    function resetControls() {
        btnPlay.classList.remove('hide');
        btnPause.classList.add('hide');
        btnStop.classList.add('hide');
        btnSet.classList.remove('hide');
    }

    function confirmtime() {
        document.querySelector('.container').classList.remove('close');
        document.querySelector('.modal-wrapper').classList.remove('open');
        document.querySelector('.modal').classList.remove('open');
    }

    function close() {
        document.querySelector('.container').classList.remove('close');
        document.querySelector('.modal-wrapper').classList.remove('open');
        document.querySelector('.modal').classList.remove('open');
    }

    return {
        timerPlay,
        pause,
        set,
        resetControls,
        confirmtime,
        close
    }
}