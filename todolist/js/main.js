"use strict";
let BTNPLUS;
let BTNTHRASH;
let form;
let aside;
let baliseEditer;
let asideH3;
let asideP;
let task_lvl;
//FONCTION

function resetForm() {
  localStorage.clear();
  showTask();
}

function showform() {
  BTNPLUS.classList.remove("hide");
}

function showDetails() {
  //variable qui contient le data ta compris maggle
  let detail = loadDatas();

  asideH3.innerHTML = `${detail[this.dataset.index].name}`;
  asideP.innerHTML = `${detail[this.dataset.index].description}`;
  task_lvl.innerHTML = `${detail[this.dataset.index].lvl}`;

  //Ici on attribut l'index du tableau au lien "editer" hallelujah.
  baliseEditer.setAttribute("data-index", this.dataset.index);

  // baliseEditer.addEventListener("click", loadDatas(this.dataset.index));
  console.log(baliseEditer);
  console.log(this.dataset.index);
}

function editer() {
  document.getElementById("name").value = asideH3.innerHTML;
  document.getElementById("description").value = asideP.innerHTML;
  task_lvl.value = task_lvl.innerHTML;
  form.setAttribute("data-mode", "edit");
  form.classList.remove("hide");
}
function loadDatas() {
  //tableau qui  contient toutes les tâches en JSON (qui se trouve dans le local storage)
  let list = localStorage.getItem("todolist");
  //tranfrome le JSON en objet complexe manipulable
  list = JSON.parse(list);
  if (list == null) list = [];
  return list;
}

function showTask() {
  let task = document.querySelector("#todo");
  let todo = loadDatas();
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
}

/**
 *
 * @param {event} event
 * variable qui contient toutes les données de l'événement (sa valeur est attribuée automatiquement grace au gestionnaire d'événement)
 */

function saveTask(event) {
  event.preventDefault();
  let list = loadDatas();
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

/*********************************
 *************CODE PRINCIPAL**************
 *********************************
 */

document.addEventListener("DOMContentLoaded", function () {
  //recuperation d'element
  aside = document.querySelector("aside");
  BTNPLUS = document.querySelector("#task-form");
  BTNTHRASH = document.querySelector("#clear-todo");

  // Partie afficher task et Editer
  task_lvl = document.querySelector("#lvl");
  asideH3 = document.querySelector("aside h3");
  asideP = document.querySelector("aside p");
  form = document.querySelector("form");

  //cible le a du aside afin d'ajouter un attrubut data-index dans la balise
  baliseEditer = document.querySelector("aside a");

  /*********************************
   *************EVENT**************
   *********************************
   */

  BTNTHRASH.addEventListener("click", resetForm);
  document.querySelector("#add-task").addEventListener("click", showform);
  document.querySelector("#task-form").addEventListener("submit", saveTask);
  baliseEditer.addEventListener("click", editer);

  showTask();
});
