"use strict";

const bands = [
  { name: "The band boys", genre: "Jazz", formedYear: 2000, active: true },
  { name: "Girls Rock", genre: "Rock", formedYear: 2013, active: true },
  { name: "Soul Child", genre: "Blues", formedYear: 2023, active: true },
];

function render(array) {
  for (let i = 0; i < array.length; i++) {
    const bands = array[i];

     if (bands.active)  {
      active = "Active";
     } else {
      active = "Not Active";
     }

    let card = `
        <div class="card" style="width:18rem;">
        <div class="card-"card body">
        <h5 class="card-title">${bands.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${bands.cuisine}</h6>
        <p class="card-text">${bands.location}</p>
        <p class="card-text">${bands.rating}</p>
        <p class="class-text>${active}</p>
        </div>
        </div>`;
    document.getElementById("main").innerHTML += card;
  }
}
render(bands);
