const fontRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontRange.addEventListener('input', (event) => {
    spanText.style.fontSize = event.target.value + 'px';
})