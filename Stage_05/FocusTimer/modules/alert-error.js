export function AlertError({
    elementAlert,
})  {
        function open() {
            elementAlert.classList.remove('close');
            elementAlert.classList.add('open');
        }
        
        function close() {
            elementAlert.classList.remove('open');
            elementAlert.classList.add('close');
        }

    return {
        open,
        close
    }
}