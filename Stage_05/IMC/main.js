// Variables

const form            = document.querySelector('form');
const inputWeight     = document.querySelector('#weight');
const inputHeight     = document.querySelector('#height');

// Variáveis antes de entrar no Modal
// const modalWrapper    = document.querySelector('.modal-wrapper');
// const modalMessage    = document.querySelector('.modal h2 span');
// const modalbtnClose   = document.querySelector('.modal button'); 

const Modal = {
    wrapper : document.querySelector('.modal-wrapper'),
    message : document.querySelector('.modal h2 span'),
    btnClose: document.querySelector('.modal button'),
    
    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

// Events

/* Três maneiras de criar e atribuir uma função a um evento */

// 1 - ArrowFunction
form.onsubmit = (event) => {
    event.preventDefault(); // Evite o padrão do evento 
    // (Nesse caso o evento padrão do submit seria enviar o form e recarregar a página!)
    const weight  = inputWeight.value;
    const height  = inputHeight.value;
    
    const result  = calculaIMC(weight, height);
    const message = `Seu IMC é de ${result}`;
    
    exibeMessage(message);
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

Modal.btnClose.onclick = () => {
    Modal.close();
    clearInput();
}

// Functions

function calculaIMC(weight, height) {
    return ((weight / (height/100) ** 2).toFixed(2))
}

function exibeMessage(message) {
    Modal.message.innerText = message;
    Modal.open();
}

function clearInput() {
    inputHeight.value = "";
    inputWeight.value = "";
}


