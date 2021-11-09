"use strict";

/**********************
 *******VARIABLES******
 **********************/
let form;
let add;
let produit;
let quantity;
let dispBasket;
let ul;
let li;
let button;
let icone;

/**************Tableau******************/
let basket = [
  {
    name: "chat",
    quantity: 4,
  },
  {
    name: "pantoufle",
    quantity: 2,
  },
  {
    name: "lapin",
    quantity: 3,
  },
  {
    name: "cheval",
    quantity: 1,
  },
];

/**********************
 *******FUNCTION******
 **********************/

//Recuperer les valeurs des        input (dans form) et les assigner a un nouvel object, afin de recuperer les données

function recupValue() {
  let bask = new Object();

  bask.name = document.querySelector("#produits").value;
  bask.quantity = document.querySelector("#number").value;

  // créer une variable qui appelle la fonction isDoublon
  let doublon = isDoublon(basket);
  if (doublon == false) {
    basket.push(bask);
  }
  displayBasket();
  form.reset();
}

//Verifie les doublons, s'il ya doublons on push la quantité sur le même index, sinon on push sur le tableau global "basket"

function isDoublon(product) {
  // Nous passons un parametre pour la verification du doublon
  let doublon = false;
  //on boucle sur le tableau basket afin de verifié les doublon
  basket.forEach((line, index) => {
    if (line.name === product.name) {
      //si nous trouvons un doublons nous incrementons la quantité du produit à la même index
      basket[index].quantity =
        parseInt(line.quantity) + parseInt(product.quantity);
      doublon = true;
    }
  });
  return doublon;
}

//Afficher le contenu du tableau basket après avoir recupérer les données de la fonction de récupération

function displayBasket() {
  let li = document.createElement("li");
  let ul = document.createElement("ul");
  let button = document.createElement("button");
  let icone = document.createElement("i");
  //ajoute ul sur la div display basket
  let index = 0;

  basket.forEach((elem) => {
    button.appendChild(icone);
    icone.innerHTML = ` <i data-index=${index} class="fas fa-trash "></i> `;
    li.innerHTML = ` ${elem.quantity} ${elem.name}(s) `;
    li.appendChild(button);
    ul.appendChild(li);
    index++;
  });

  basket.innerHTML = "";
  dispBasket.appendChild(ul);
}

// supprimer un element par ligne du tableau basket

//supprimer un element par son nom

/**********************
 *******MAIN CODE******
 **********************/
document.addEventListener("DOMContentLoaded", function () {
  /*
   **************SELECTORS************
   */
  form = document.querySelector("form");
  add = document.querySelector("#add");
  produit = document.querySelector("#produits");
  quantity = document.querySelector("#number");
  dispBasket = document.querySelector("#display-basket");

  /*
   **************EVENT************
   */

  //Empeche le raffraichissement par defaut de la page au click sur le bouton submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return;
  });
  add.addEventListener("click", recupValue);

  /**create Element */
});
