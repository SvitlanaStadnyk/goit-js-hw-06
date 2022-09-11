const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const newEl = document.createElement("li");
newEl.textContent = `${ingredients}`;
newEl.classList.add("item");

ingredients.forEach((ingredient) => {
  const newEl = document.createElement("li");
  newEl.textContent = `${ingredient}`;
  newEl.classList.add("item");
  ingredientsList.append(newEl);
});

console.log(ingredientsList);

const titleRef = document.createElement("h1");
titleRef.textContent = "Ingredients";
ingredientsList.before(titleRef);

console.log(titleRef);
