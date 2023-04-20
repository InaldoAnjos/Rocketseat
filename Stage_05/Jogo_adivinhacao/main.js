// Variáveis
const mainScreen = document.querySelector(".main-screen");
const secondaryScreen = document.querySelector(".secondary-screen");
const btnTry = document.querySelector("#btnTry");
const tryAgain = document.querySelector("#btnTryAgain");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
tryAgain.addEventListener('click', handleTryAgainClick);
document.addEventListener('keypress', keyPress);

// Funções
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) != ""){
        if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
            window.alert('O número inserido deve ser entre 0 e 10. Tente novamente!')
            inputNumber.value = "";
        }
        else if(Number(inputNumber.value) == randomNumber) {
           toggleScreen();
            //document.querySelector(".secondary-screen h2").innerText = `Acertou em ${xAttempts} tentativas!`;
            // OU
            secondaryScreen.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`;
        }
        inputNumber.value = "";
        xAttempts++;
    }else{
        inputNumber.value = "";
    }

}

function handleTryAgainClick() {
    toggleScreen();
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    mainScreen.classList.toggle("hide");
    secondaryScreen.classList.toggle("hide");
}

function keyPress(e) {
    if(e.key === 'Enter' && mainScreen.classList.contains('hide')){
        handleTryAgainClick();
    }
}