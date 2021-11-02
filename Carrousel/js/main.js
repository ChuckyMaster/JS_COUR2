"use strict";

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

//  FONCTION

function refreshSlider() {
  const figcaption = document.querySelector("#slider figcaption");
  const img = document.querySelector("#slider img");
  figcaption.textContent = PHOTOS[0].legend;
  img.src = `images/${PHOTOS[0].src}`;
  img.alt = PHOTOS[0].legend;
}

// CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
  refreshSlider();
});
