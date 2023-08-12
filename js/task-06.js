const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', handlerVerify);

function handlerVerify(event) {
  const { value, dataset, classList } = event.currentTarget;

  if (value.length !== Number(dataset.length)) {
    classList.add('invalid');
  } else classList.toggle('invalid');

  classList.add('valid');
}

console.log(textInput);

// function handlerVerify(event) {
//   const { value, dataset, classList } = event.currentTarget;

//   if (value.length === Number(dataset.length)) {
//     classList.remove('invalid');
//     classList.add('valid');
//   } else classList.remove('valid');
//   classList.add('invalid');
// }
