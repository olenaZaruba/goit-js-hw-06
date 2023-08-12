const elements = document.querySelectorAll('.item');
console.log(`Number of categories: ${elements.length}`);

elements.forEach(function (list) {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.children.length}`);
});
