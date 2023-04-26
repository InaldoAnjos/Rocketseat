// Variáveis antes de entrar no Modal
// const modalWrapper    = document.querySelector('.modal-wrapper');
// const modalMessage    = document.querySelector('.modal h2 span');
// const modalbtnClose   = document.querySelector('.modal button'); 

export const Modal = {
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

Modal.btnClose.onclick = () => {
    Modal.close();
}

// addEventListener with arrowfunction
//window.addEventListener('keydown', (event) => {
//      if (event.key === 'Escape') {
//          Modal.close();
//      }
//})

// addEventListener with anonymous function
//window.addEventListener('keydown', function(event) {
//      if (event.key === 'Escape') {
//          Modal.close();
//      }    
//}

// addEventListener with function
window.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close();
    }
}