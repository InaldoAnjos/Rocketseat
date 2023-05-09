export const AlertError = {
        element: document.querySelector('.alert-error'),
        open() {
            AlertError.element.classList.remove('close');
            AlertError.element.classList.add('open');
        },
        close() {
            AlertError.element.classList.remove('open');
            AlertError.element.classList.add('close');
        }
}