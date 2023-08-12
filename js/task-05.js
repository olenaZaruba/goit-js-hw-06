const elem = {
  typeName: document.querySelector('#name-input'),
  greetingName: document.querySelector('#name-output'),
};

elem.typeName.addEventListener('input', event => {
  elem.greetingName.textContent =
    elem.typeName.value.trim() !== ''
      ? event.currentTarget.value.trim()
      : 'Anonymous';
});
