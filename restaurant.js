"use strict";

const restaurant = [
  { name: "Mcdonald's", cuisine: "fast food", location: "Hammond", rating: 5 },
  { name: "Wendy's", cuisine: "fast food", location: "Ponchatoula", rating: 4 },
  { name: "Burger King", cuisine: "fast food", location: "Amite", rating: 4 },
];

function render(array) {
  for (let i = 0; i < array.length; i++) {
    const restaurant = array[i];

    let card = `
        <div class="card" style="width:18rem;">
        <div class="card-"card body">
        <h5 class="card-title">${restaurant.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${restaurant.cuisine}</h6>
        <p class="card-text">${restaurant.location}</p>
        <p class="card-text">${restaurant.rating}</p>
        </div>
        </div>`;
    document.getElementById("main").innerHTML += card;
  }
}
render(restaurant);
