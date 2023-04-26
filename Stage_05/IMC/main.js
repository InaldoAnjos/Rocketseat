import { Modal } from './modules/modal.js';
import { notANumber } from './modules/validations.js';
import { AlertError } from './modules/alert-error.js';
import { calculateIMC } from './modules/utils.js';

// Variables

const form            = document.querySelector('form');
const inputWeight     = document.querySelector('#weight');
const inputHeight     = document.querySelector('#height');

// Events

/* Três maneiras de criar e atribuir uma função a um evento */

// 1 - ArrowFunction
form.onsubmit = (event) => {
    event.preventDefault(); // Evite o padrão do evento 
    // (Nesse caso o evento padrão do submit seria enviar o form e recarregar a página!)
    const weight  = inputWeight.value;
    const height  = inputHeight.value;
    
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
    
    if(weightOrHeightIsNotANumber) {
        AlertError.open();
        inputWeight.oninput = () => AlertError.close();
        inputHeight.oninput = () => AlertError.close();
        return;
    }else {
        AlertError.close();

        const result  = calculateIMC(weight, height);        
        exibeMessage(result);
    }
}


/* 2 - Função anônima 
form.onsubmit = function() {
    
}
*/

/* 3 - Função 
form.onsubmit = handleSubmit;

function handleSubmit() {
    
}
*/

function clearInput() {
    inputHeight.value = "";
    inputWeight.value = "";
}

function exibeMessage(result) {
    const message = `Seu IMC é de ${result}`;
    Modal.message.innerText = message;
    Modal.open();
    clearInput();
}
