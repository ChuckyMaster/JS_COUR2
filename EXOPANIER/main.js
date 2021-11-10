"use strict";

/***********************************
 **************VARIABLES************
 ************************************/

let li;
let form;
let add;
let produit;
let quantity;
let basketbasket;
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
  {
    name: "connard",
    quantity: 1000,
  },
];

/***********************************
 **************FUNCTIONS************
 ************************************/

function AddToBasket() {
  //attribut des valeur sur le tableau
  let prod = produit.value;
  let quant = number.value;
  basket.push({
    name: prod,
    quantity: quant,
  });

  displayBasket();
  console.log("HI");

  form.reset();
}

function recup() {
  let panier = new Object();

  //Récupérer la valeur dans l'input name et le stock dans la ligne name de notre objet panier
  panier.name = document.querySelector("#produits").value;
  panier.quantity = document.querySelector("#number").value;
  let doublon = isDoublon(panier);
  if (doublon == false) {
    basket.push(panier);
  }
  displayBasket();
}

function isDoublon(produit) {
  let doublon = false;
  basket.forEach((ligne, index) => {
    if (ligne.name == produit.name) {
      basket[index].quantity =
        parseInt(ligne.quantity) + parseInt(produit.quantity);
      doublon = true;
    }
  });
  return doublon;
}

function displayBasket() {
  let ul = document.createElement("ul");
  let basketbasket = document.querySelector("#basket");

  // creer l'index qui va être dans chaque ligne
  let index = 0;

  //BOUCLE
  basket.forEach((elem) => {
    //creer les balises
    let li = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("remove");
    //creer le <i> pour l'icone
    const i = document.createElement("i");
    //afficher les elements dans la baskete / ajouter chaque ligne
    li.innerHTML = `${elem.quantity} ${elem.name}(s) `;
    i.innerHTML = ` <i data-index=${index} class="fas fa-trash "></i> `;

    //ajouter les button dans chaque baskete ( dans chaque button est creer une icone)
    li.appendChild(button);
    button.appendChild(i);
    ul.appendChild(li);
    index++;
  });
  basketbasket.innerHTML = "";
  basketbasket.appendChild(ul);

  // variable qui stock le selector du "button" .remove ( contient toutes les balises des boutons)
  let remove = document.querySelectorAll(".remove");

  //On boucle sur les boutons afin de rajouter un event click sur chacun d'entre eux
  remove.forEach((elem) => {
    elem.addEventListener("click", deleteOne);
  });
}

function deleteOne(e) {
  basket.splice(e.target.dataset.index, 1);
  displayBasket();
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
  add.addEventListener("click", recup);
});
