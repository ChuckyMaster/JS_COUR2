"use strict";
let state = new Object();
let interval;
// let tabou = new Array();
state.index = 0;
const TOOLBAR = document.querySelector("#toolbar-toggle");
const ul = document.querySelector("ul");
const HEADERA = document.querySelector("header a");
const btnPlay = document.querySelector("#slider-toggle");
const btnNext = document.querySelector("#slider-next");
const btnPrev = document.querySelector("#slider-previous");
const btnrandom = document.querySelector("#slider-random");
TOOLBAR.addEventListener("click", togglePlay);
let currentPhoto = null;

// TABLEAU --------------------------------------------------------------------------
const PHOTOS = [
  {
    src: "1.jpg",
    legend: "panda",
  },
  {
    src: "2.jpg",
    legend: "yoga",
  },
  {
    src: "3.jpg",
    legend: "coucher soleil",
  },
  {
    src: "4.jpg",
    legend: "night",
  },
  {
    src: "5.jpg",
    legend: "tea time",
  },
  {
    src: "6.jpg",
    legend: "gateaux",
  },
];

//  FONCTION---------------------------------------------------------------------------

function diapo() {
  const icon = document.querySelector("#slider-toggle i");
  if (icon.classList.contains("fa-pause")) {
    clearInterval(interval);
  } else {
    interval = setInterval(next, 2500);
  }
  icon.classList.toggle("fa-pause");
  icon.classList.toggle("fa-play");
}

btnPlay.addEventListener("click", diapo);

// function random() {
//   state.index = getRandom(0, PHOTOS.length);
//   refreshSlider();
// }

function random() {
  let randomInt = getRandom(0, PHOTOS.length);
  while (state.index == randomInt) {
    getRandom(0, PHOTOS.length);
  }
  state.index = randomInt;
  refreshSlider(state.index);
}

function togglePlay() {
  ul.classList.toggle("hide");
  HEADERA.classList.toggle("fa-rotate-90");
}

function next() {
  state.index++;
  if (state.index > PHOTOS.length - 1) {
    state.index = 0;
  }
  refreshSlider();
}

function prev() {
  state.index--;
  if (state.index === 0) {
    state.index === PHOTOS.length;
  }
  refreshSlider();
}

function refreshSlider() {
  const figcaption = document.querySelector("#slider figcaption");
  // L'élément HTML <figcaption> représente une légende décrivant le reste du contenu de son élément parent <figure>.
  const img = document.querySelector("#slider img");
  // on selectionne une image
  figcaption.textContent = state.legend;
  //la c'est pour mettre du texte dans le figcaption
  img.src = `images/${PHOTOS[state.index].src}`;
  // bah là on met l'image disponnible dans le tableau patati patata
  img.alt = PHOTOS[state.index].legend;
}

// CODE PRINCIPAL-----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  refreshSlider();
});

btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
btnrandom.addEventListener("click", random);
