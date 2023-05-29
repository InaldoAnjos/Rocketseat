export function Sound() {
    const forestAudio = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Forest.wav?raw=true")
    const rainAudio   = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/chuva.mp3?raw=true")
    const marketAudio = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Market.wav?raw=true")
    const fireAudio   = new Audio("https://github.com/InaldoAnjos/audios/blob/main/audios/Fire.wav?raw=true")

    function pressForest() {
        forestAudio.play();
        forestAudio.loop = true;
    }
    function pressRain() {
        rainAudio.play();
        rainAudio.loop = true;
    }
    function pressMarket() {
        marketAudio.play();
        marketAudio.loop = true;
    }
    function pressFire() {
        fireAudio.play();
        fireAudio.loop = true;
    }

    return {
        pressForest,
        pressRain,
        pressMarket,
        pressFire
    }
}