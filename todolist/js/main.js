"use strict";
const BTNPLUS = document.querySelector("#task-details");

//FONCTION
function displayForm() {
  console.log("ok");
  BTNPLUS.classList.toggle("hide");
}

// CODE PRINCIPAL

BTNPLUS.addEventListener("click", displayForm);
