const validInput = document.querySelector('#validation-input');

validInput.addEventListener('blur', (e) => {
    if (validInput.dataset.length == e.target.value.length){
        validInput.classList.remove('invalid')
        validInput.classList.add('valid')
    } else {
        validInput.classList.remove('valid')
        validInput.classList.add('invalid')
    }
})

