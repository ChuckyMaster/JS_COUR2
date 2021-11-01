"use strict";

// const content = document.querySelector("#content");
const btn = document.querySelectorAll("button#h1, button#h2, button#h3, p");
// const btnH2 = document.querySelector("button#h2");
// const btnH3 = document.querySelector("button#h3");

// btnH1.addEventListener("click", () => {
//   //   content.setAttribute("contenteditable", "");
//   content.insertAdjacentHTML("afterbegin", "<h1> test</h1>");
//   console.log("log from generate addevent h1 clik");
// });

// FONCTION

function generateHTML() {
  content.insertAdjacentHTML(
    "afterbegin",
    `<h1 contentEditable = "true">test </h1>`
  );
  return;
}
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
