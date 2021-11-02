"use strict";

const IMG = document.querySelectorAll("li");
const SELECTALL = document.querySelector("#selectAll");
const DESELECT = document.querySelector("#deselectAll");
let count = 0;

// FUNCTION

function onClickList() {
  this.classList.toggle("selected");
  this.disabled = true;
  if (this.classList.contains("selected")) {
    count++;
  } else {
    count--;
  }

  document.querySelector("em").innerHTML = ` ${count}
`;
}

function selectAll() {
  for (let i of IMG) {
    i.classList.add("selected");
    count++;
    document.querySelector("em").innerHTML = ` ${count}
  `;
  }
}

function deselectAll() {
  for (let i of IMG) {
    i.classList.remove("selected");
    count = 0;
    document.querySelector("em").innerHTML = ` ${count}
  `;
  }
}

// CODE PRINCIPAL

for (let li of IMG) {
  li.addEventListener("click", onClickList);
}

SELECTALL.addEventListener("click", selectAll);
DESELECT.addEventListener("click", deselectAll);
