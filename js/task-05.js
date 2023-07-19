const input = document.querySelector('input');
const span = document.querySelector('span');

input.addEventListener('input', updateValue)

function updateValue(e) {
    if (e.target.value) {
        span.textContent = e.target.value;
    } else {
        span.textContent = 'Anonymous'; 
    }

}

console.log(input);
console.log(span);