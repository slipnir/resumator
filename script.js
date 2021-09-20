document.addEventListener('DOMContentLoaded', ()=> {

    const formButton = document.querySelector('.js__form-button');
    const formSubscribe = document.querySelector('.js__form-subscribe');
    const formSuccess = document.querySelector('.js__form-success');

    if(formButton) {
        formButton.addEventListener('click', (event) => {
            event.preventDefault();
            formSubscribe.classList.add('hidden');
            formSuccess.classList.remove('hidden');
        });
    }
});