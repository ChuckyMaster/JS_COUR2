"use strict";

/***********************************
 **************VARIABLES************
 ************************************/

let li;
let form;
let add;
let produit;
let quantity;
let basketList;
let btnTrash;
let basket = [
  {
    name: "patate",
    quantity: 2,
  },
  {
    name: "cerise",
    quantity: 3,
  },
  {
    name: "prune",
    quantity: 4,
  },
];

/***********************************
 **************FUNCTIONS************
 ************************************/

function AddToBasket() {
  let prod = produit.value;
  let quant = number.value;

  basket.push({
    name: prod,
    quantity: quant,
  });
  displayBasket();
  console.log("HI");
}

function displayBasket() {
  let ul = document.createElement("ul");
  let basketList = document.querySelector("#basket");
  let index = 0;

  //BOUCLE
  basket.forEach((elem) => {
    let li = document.createElement("li");
    const button = document.createElement("button");
    const i = document.createElement("i");

    //buttonTrash.innerHTML = '';

    li.innerHTML = `${elem.quantity} ${elem.name}(s) `;
    i.innerHTML = ` <i data-index=${index} class="fas fa-trash "></i> `;

    li.appendChild(button);
    button.appendChild(i);
    // li.appendChild(buttonTrash);
    ul.appendChild(li);
    index++;
  });

  btnTrash = document.querySelectorAll(".fa-trash");

  btn;

  basketList.innerHTML = "";
  basketList.appendChild(ul);
  console.log("displaybasket func");
}

function deletOne() {
  basket.splice(this.dataset.index, 1);

  console.log("Yo");
}

document.addEventListener("DOMContentLoaded", function () {
  /***********************************
   **************SELECTORS************
   ************************************/
  form = document.querySelector("form");
  add = document.querySelector("#add");
  produit = document.querySelector("#produits");
  quantity = document.querySelector("#number");

  /***********************************
   **************EVENT************
   ************************************/

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return;
  });
  add.addEventListener("click", AddToBasket);
});
