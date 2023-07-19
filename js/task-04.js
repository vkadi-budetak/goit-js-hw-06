let counterValue = 0;

const counter = document.querySelector('#counter');
const btnDec = counter.querySelector("button[data-action='decrement']");
const btnInc = counter.querySelector("button[data-action='increment']");
const cauntVal = counter.querySelector("#value");

btnDec.addEventListener('click', () => {
    counterValue -= 1;
    cauntVal.innerHTML = counterValue;
} )

btnInc.addEventListener('click', () => {
    counterValue += 1;
    cauntVal.innerHTML = counterValue;
} )