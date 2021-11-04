"use strict";
let BTNPLUS;
let BTNTHRASH;
let form;
let detail = new Array();
let aside;

//FONCTION

function resetForm() {
  localStorage.clear();
}

function showform() {
  BTNPLUS.classList.remove("hide");
}

function showDetails() {
  detail.push(aside.insertAdjacentHTML("beforeend", `${this.dataset.index}`));
  console.log(this.dataset.index);
}

function showTask() {
  let task = document.querySelector("#todo");
  let todo = JSON.parse(localStorage.getItem("todolist"));
  let ul = document.createElement("ul");

  todo.forEach((todoEl, index) => {
    let li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.textContent = `${todoEl.name} accompli à ${todoEl.lvl}  %`;
    li.addEventListener("click", showDetails);
    ul.appendChild(li);
  });

  task.innerHTML = "";
  task.appendChild(ul);
  console.log(todo);

  //CORRECTION
}

// afficher les details. Cibler les li

// function loadDatas() {
//   let list = JSON.parse(localStorage.getItem("todolist"));
//   if (list == null) list = [];
//   return list;
// }

/**
 *
 * @param {event} event
 * variable qui contient toutes les données de l'événement (sa valeur est attribuée automatiquement grace au gestionnaire d'événement)
 */

function saveTask(event) {
  event.preventDefault();
  let list = JSON.parse(localStorage.getItem("todolist"));
  if (list == null) list = [];
  //objet qui contient et reccup les valeur
  let task = new Object();
  task.lvl = document.querySelector("#lvl").value;
  task.name = document.querySelector("#name").value;
  task.description = document.querySelector("#description").value;

  //LOCALSTORAGE
  console.log(task);

  //ajoute l'objet task au tableau
  list.push(task);
  let jsonlist = JSON.stringify(list);
  localStorage.setItem("todolist", jsonlist);
  console.log(list);

  showTask();
  form.reset();
}

// CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
  aside = document.querySelector("aside");
  BTNPLUS = document.querySelector("#task-form");
  BTNTHRASH = document.querySelector("#clear-todo");
  form = document.querySelector("form");
  BTNTHRASH.addEventListener("click", resetForm);

  document.querySelector("#add-task").addEventListener("click", showform);
  document.querySelector("#task-form").addEventListener("submit", saveTask);

  showTask();
});
