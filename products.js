"use strict";

const products = [
  { name: "Apple", category: "fruit", price: 2.99, inStock: true },
  { name: "Brocoli", category: "vegetable", price: 1.75, inStock: true },
  { name: "Water", category: "drink", price: 0.99, inStock: true },
];

function render(array) {
  for (let i = 0; i < array.length; i++) {
    const products = array[i]; 

    if (products.inStock) {
      inStock = "Is Stocked"
    } else {
      inStock = "Not Stocked";
    }

    let card = `
        <div class="card" style="width:18rem;">
        <div class="card-"card body">
        <h5 class="card-title">${products.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${products.cuisine}</h6>
        <p class="card-text">${products.location}</p>
        <p class="card-text">${products.rating}</p>
        <p class="class-text">${active}</p>
        </div>
        </div>`;
    document.getElementById("main").innerHTML += card;
  }
}
render(products);
