"use strict"; // Mode strict du JavaScript

/***********************************************************************************/
/* ********************************* DONNEES CARROUSEL *****************************/
/***********************************************************************************/

// Codes des touches du clavier.
const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;

// La liste des slides du carrousel.
let slides = [
  { image: "images/1.jpg", legend: "Frères pandas" },
  { image: "images/2.jpg", legend: "Yoga on the top" },
  { image: "images/3.jpg", legend: "Lever de soleil" },
  { image: "images/4.jpg", legend: "Ciel étoilé" },
  { image: "images/5.jpg", legend: "Tea time" },
  { image: "images/6.jpg", legend: "Ca va péter le bide" },
];

// Objet contenant l'état du carrousel.
let state;

/***********************************************************************************/
/* ******************************** FONCTIONS CARROUSEL ****************************/
/***********************************************************************************/

function onSliderGoToNext() {
  $(state).index++;
}

/***********************************************************************************/
/* ******************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne en deuxième
 * argument directement à document.addEventListener().
 */

$(document).ready(function () {
  // Initialisation du carrousel.
  state = {};
  state.index = 0; // On commence à la première slide
  state.timer = null; // Le carrousel est arrêté au démarrage

  /*********************
   *******SELECTORS****/

  /*********************
   *******EVENT****/
  $("#slider-random").on("click", onSliderGoToRandom);
  $("#slider-previous").on("click", onSliderGoToPrevious);
  $("#slider-next").on("click", onSliderGoToNext);
  $("#slider-toggle").on("click", onSliderToggle);
  $("#toolbar-toggle").on("click", onToolbarToggle);
});
