"use strict";

const products = [
  { name: "Apple", category: "fruit", price: 2.99, inStock: true },
  { name: "Brocoli", category: "vegetable", price: 1.75, inStock: true },
  { name: "Water", category: "drink", price: 0.99, inStock: true },
];

function render(array) {
  for (let i = 0; i < array.length; i++) {
    let inStock = ""
    const products = array[i];

    let card = `
        <div class="card" style="width:18rem;">
        <div class="card- body">
        <h5 class="card-title">${products.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${products. category}</p>
        <p class="card-text">${products.price}</p>
        <p class="card-text">${products.inStock}</p>
        </div>
        </div>`;
    document.getElementById("products").innerHTML += card;
  }
}
render(products);
