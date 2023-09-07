const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector("ul#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  li.style.listStyleType = "none";
  fragment.appendChild(li); 
});


ulElement.appendChild(fragment);
