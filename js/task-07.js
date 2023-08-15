const refs = {
  inputRange: document.querySelector('#font-size-control'),
  magicText: document.querySelector('#text'),
};

refs.magicText.style.fontSize = Number(refs.inputRange.value) + 'px';
refs.inputRange.addEventListener('input', handlerRange);
function handlerRange(evt) {
  refs.magicText.style.fontSize = Number(evt.currentTarget.value) + 'px';
}

console.log(refs.magicText);
console.log(refs.inputRange);
