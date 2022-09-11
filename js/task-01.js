const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.children.length}`);

items.forEach((item) => {
  const categories = item.querySelector("#categories");
  const elements = item.querySelectorAll("li");
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${("elements", elements.length)}`);
});
