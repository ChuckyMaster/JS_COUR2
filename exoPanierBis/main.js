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
  let doublon = isDoublon(bask); // !! BIEN METTRE EN PARAMETRE LE NEW OBJET DE LA FONCTION ( car valeur reutiliser à l'appelle de la fonction)
  if (doublon == false) {
    basket.push(bask);
  }
  displayBasket();
}

//Verifie les doublons, s'il ya doublons on push la quantité sur le même index, sinon on push sur le tableau global "basket"

function isDoublon(product) {
  // Nous passons un parametre pour la verification du doublon
  let doublon = false;
  //on boucle sur le tableau basket afin de verifié les doublon
  basket.forEach((line, index) => {
    if (line.name == product.name) {
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
  //cibler la div qui affichera la list basket
  let dispBasket = document.querySelector("#display-basket");
  let ul = document.createElement("ul");

  //ajoute ul sur la div display basket
  let index = 0;
  //DEBUT BOUCLE FOREACH
  basket.forEach((elem) => {
    //Creer les element dans la boucle afin qu'elle se regenere a chaque passage
    let li = document.createElement("li");
    let button = document.createElement("button");
    //nous sommes sur le button supprimer, de ce fait j'ajoute la classe .remove
    button.classList.add("remove"); //!!ATTENTION NE PAS METTRE LE POINT!!!!!
    let icone = document.createElement("i");

    icone.innerHTML = ` <i data-index=${index} class="fas fa-trash "></i> `;
    li.innerHTML = ` ${elem.quantity} ${elem.name}(s) `;
    li.appendChild(button);
    button.appendChild(icone);
    ul.appendChild(li);
    index++;
  });

  //vider le contenu
  dispBasket.innerHTML = "";
  dispBasket.appendChild(ul);

  //Je stock tout les button avec la classe remove afin d'ajouter un gestionnaire d'evenement au "click" sur chacun d'entre eux

  let remove = document.querySelectorAll(".remove");

  //ajouter le gestionnaire d'evenement sur chaque button .remove qui appelle la fonction removeOne
  remove.forEach((elem) => {
    elem.addEventListener("click", removeOne);
  });
}

// supprimer un element par ligne du tableau basket

function removeOne(e) {
  basket.splice(e.target.dataset.index, 1);
  //event.target permet de pointer sur l'origine de l'evenement, ici la fonction est appellé sur l'evenement au click sur les button . remove
  displayBasket();
}

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

  /*
   **************EVENT************
   */

  //Empeche le raffraichissement par defaut de la page au click sur le bouton submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return;
  });
  add.addEventListener("click", recupValue);
});
