const refs = {
  bgrColor: document.querySelector('.color'),
  newColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

refs.newColorBtn.addEventListener('click', handlerColorClick);

function handlerColorClick(evt) {
  let random = getRandomHexColor();
  refs.body.style.backgroundColor = random;
  refs.bgrColor.textContent = random;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
