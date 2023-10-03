const categoriesList = document.getElementById("categories");
const categoriesItems = document.querySelectorAll(".item"); // el queryselecytorAll me genera un array con los elementos que tengan la etiqueta item
const numberCategories = categoriesItems.length;
console.log(` Cantidad de Categorias es: ${numberCategories} `);

for (let i = 0; i < numberCategories; i++) {
  const categorie = categoriesItems[i];
  const tittle = categorie.querySelector("h2").textContent;
  const elements = categorie.querySelectorAll("li").length;
  console.log("Categories : " + tittle);
  console.log("Cantidad de elementos : " + elements);
}
