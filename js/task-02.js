const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elUl = document.querySelector('#ingredients');

const ulEls = ingredients.map((ingName) => {
  const liEl = document.createElement("li")
  liEl.className = 'item'
  liEl.innerText = ingName

  return liEl
})

elUl.append(...ulEls);
