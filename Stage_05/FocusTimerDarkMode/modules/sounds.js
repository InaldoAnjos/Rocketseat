export function Sound() {
    const forestAudio = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Forest.wav?raw=true")
    const rainAudio   = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/chuva.mp3?raw=true")
    const marketAudio = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Market.wav?raw=true")
    const fireAudio   = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Fire.wav?raw=true")

    let currentMusic = forestAudio;

    function pressForest() {
        currentMusic = forestAudio;
        forestAudio.play();
        forestAudio.loop = true;
    }
    function pressRain() {
        currentMusic = rainAudio;
        rainAudio.play();
        rainAudio.loop = true;
    }
    function pressMarket() {
        currentMusic = marketAudio;
        marketAudio.play();
        marketAudio.loop = true;
    }
    function pressFire() {
        currentMusic = fireAudio;
        fireAudio.play();
        fireAudio.loop = true;
    }

    function stopSound() {
        currentMusic.pause();
    }

    function setVolumeToHalf(audio, audioVolumeControl) {
        audioVolumeControl.value = 0.5;    
        audio.volume = audioVolumeControl.value;
    }

    function setVolume(audio, audioVolumeControl) {
        audio.volume = audioVolumeControl.value
    }



    return {
        pressForest,
        pressRain,
        pressMarket,
        pressFire,
        stopSound,
        setVolumeToHalf,
        setVolume,
        forestAudio,
        rainAudio,
        marketAudio,
        fireAudio   
    }
}