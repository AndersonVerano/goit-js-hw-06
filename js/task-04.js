const counter = document.getElementById("counter");
const value = document.getElementById("value");

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
  counterValue++;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue--;
  value.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
