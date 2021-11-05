"use strict";

// const content = document.querySelector("#content");

// const btnH2 = document.querySelector("button#h2");
// const btnH3 = document.querySelector("button#h3");

// btnH1.addEventListener("click", () => {
//   //   content.setAttribute("contenteditable", "");
//   content.insertAdjacentHTML("afterbegin", "<h1> test</h1>");
//   console.log("log from generate addevent h1 clik");
// });

// FONCTION

// function generateHTML() {
//   content.insertAdjacentHTML(
//     "afterbegin",
//     `<h1 contentEditable = "true">test </h1>`
//   );
//   return;
// }
// function generateH2() {
//   content.insertAdjacentHTML(
//     "afterbegin",
//     `<h2 contentEditable = "true">test </h2>`
//   );
//   return;
// }
// function generateH3() {
//   content.insertAdjacentHTML(
//     "afterbegin",
//     `<h3 contentEditable = "true">test </h3>`
//   );
//   return;
// }

// btnH1.addEventListener("click", generateH1);

// VARIABLES

const content = document.querySelector("#content");
const POPUP = document.querySelector("#popup");

// FONCTION

function exportHTML() {
  const HTML = content.innerHTML.replace(/contenteditable="true"/g, "");
  const div = document.createElement("div");
  div.textContent = HTML;
  POPUP.innerHTML = "";
  POPUP.appendChild(div);
  POPUP.classList.remove("hide");
}

function generateHTML() {
  const ID = this.id;
  if (ID == "hr") {
    content.insertAdjacentHTML("beforeend", `<hr>`);
  } else {
    content.insertAdjacentHTML(
      "beforeend",
      `<${ID} contenteditable='true'> Saisir le texte </${ID}>`
    );
  }
}

function hidePopup() {
  POPUP.classList.add("hide");
}

// CODE PRINCIPAL

// cible les boutons qui permettent de générer une balise et on leur
//installe un gestionnaire d'évévement
const BUTTONS = document.querySelectorAll("button:not(#export)");
BUTTONS.forEach((button) => button.addEventListener("click", generateHTML));

//cible le bouton qui l'id export et installe un gestionnaire d'événement
document.querySelector("#export").addEventListener("click", exportHTML);

// cacher la popup au double clic

POPUP.addEventListener("dblclick", hidePopup);
