const elements = {
  clickDown: document.querySelector('button[data-action="decrement"]'),
  clickUp: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector('#value'),
};
let number = Number(elements.counter.textContent);
elements.clickUp.addEventListener('click', handlerClickUp);

function handlerClickUp(event) {
  number += 1;
  elements.counter.textContent = number;
}
elements.clickDown.addEventListener('click', handlerClickDown);
function handlerClickDown(event) {
  number -= 1;
  elements.counter.textContent = number;
}
