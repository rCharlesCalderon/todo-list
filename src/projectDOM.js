import { head } from "lodash";
import { listOfProjects } from "./objects";
import { projectObject } from "./objects";
import { datalistOption } from "./objects";
import { todo } from "./objects";

export function createProjectForm() {
  let titleFormContainer = document.createElement("div");
  titleFormContainer.classList.add("title-form-container");
  document.body.appendChild(titleFormContainer);
  let exitButton = document.createElement("span");
  exitButton.classList.add("exit-button");
  exitButton.textContent = "X";
  titleFormContainer.appendChild(exitButton);
  let projectName = document.createElement("h3");
  projectName.textContent = "Title";
  projectName.classList.add("project-title");
  titleFormContainer.appendChild(projectName);
  let projectFormInput = document.createElement("input");
  projectFormInput.classList.add("project-form-input");
  titleFormContainer.appendChild(projectFormInput);
  let saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  titleFormContainer.appendChild(saveButton);
  saveButton.textContent = "Save";
  blurPage();
  exitButtonClick();
  createTodo();
}

function createTodo() {
  let titleInput = document.querySelector(".project-form-input");
  let saveButton = document.querySelector(".save-button");
  saveButton.addEventListener("click", () => {
    let project = projectObject(crypto.randomUUID(), titleInput.value);
    listOfProjects.push(project);
    blurPage();
    todoHeader(project);
    removeForm();
    createProjectCard();
    todoDOM(project);
  });
}

function todoDOM(project) {
  let todoContainer = document.querySelector(".todo-container");
  let addTaskButton = document.createElement("button");
  addTaskButton.classList.add("add-task");
  todoContainer.appendChild(addTaskButton);
  addTaskButton.textContent = "Add task+";
  addTaskButton.addEventListener("click", () => {
    todoForm(project);
  });
}

function todoForm(projectObject) {
  let todoFormContainer = document.createElement("div");
  todoFormContainer.classList.add("todo-form-container");
  document.body.appendChild(todoFormContainer);
  //TODO NAME
  let todoTaskName = document.createElement("input");
  todoTaskName.className = "todo-form-input";
  let taskName = document.createElement("span");
  taskName.className = "todoform-text";
  taskName.textContent = "Task name";
  todoFormContainer.appendChild(taskName);
  todoTaskName.placeholder = "Task name";
  todoTaskName.classList.add("todo-name");
  todoFormContainer.appendChild(todoTaskName);
  //DESCRIPTION
  let todoTaskDesc = document.createElement("input");
  todoTaskDesc.className = "todo-form-input";
  let todoDesc = document.createElement("span");
  todoDesc.className = "todoform-text";
  todoDesc.textContent = "Description";
  todoFormContainer.appendChild(todoDesc);
  todoTaskDesc.placeholder = "Description";
  todoTaskDesc.classList.add("todo-description");
  todoFormContainer.appendChild(todoTaskDesc);
  //DATE
  let todoDate = document.createElement("input");
  todoDate.className = "todo-form-input";
  let date = document.createElement("span");
  date.className = "todoform-text";
  date.textContent = "Date";
  todoFormContainer.appendChild(date);
  todoDate.type = "date";
  todoDate.classList.add("todo-date");
  todoFormContainer.appendChild(todoDate);
  //Priority

  priority();
  //Save button
  todoTaskSave();

  ///
}
function todoTaskSave() {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let priorityInput = document.querySelector('input[name="radio"]:checked');
  let todoDate = document.querySelector(".todo-date");

  let button = document.createElement("button");
  todoFormContainer.appendChild(button);
  button.classList.add("save-todo");

  button.addEventListener("click", () => {
    console.log(priorityInput.value);
  });
}
function priority() {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let priorityTitle = document.createElement("span");
  priorityTitle.textContent = "Priority";
  priorityTitle.className = "todoform-text";
  todoFormContainer.appendChild(priorityTitle);
  let todoLabelContainer = document.createElement("label");
  todoLabelContainer.className = "todo-label-container";
  //
  let priorityHigh = document.createElement("input");
  priorityHigh.type = "radio";
  priorityHigh.value = "High";
  priorityHigh.name = "radio";
  //
  let priorityMedium = document.createElement("input");
  priorityMedium.type = "radio";
  priorityMedium.value = "Medium";
  priorityMedium.name = "radio";
  //
  let priorityLow = document.createElement("input");
  priorityLow.type = "radio";
  priorityLow.value = "Low";
  priorityLow.name = "radio";

  todoLabelContainer.appendChild(priorityHigh);
  todoLabelContainer.appendChild(priorityMedium);
  todoLabelContainer.appendChild(priorityLow);
  todoFormContainer.appendChild(todoLabelContainer);
}




function todoHeader(project) {
  let titleInput = document.querySelector(".project-form-input");
  let headerContainer = document.querySelector(".todo-header");
  headerContainer.innerHTML = "";
  let headerTitle = document.createElement("p");
  headerTitle.textContent = project.projectName;
  headerContainer.appendChild(headerTitle);
}

function createProjectCard() {
  let projectContainer = document.querySelector(".projects");
  stopCardDup();
  listOfProjects.forEach((project) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectContainer.appendChild(projectCard);
    projectCard.addEventListener("click", () => {
      console.log(project);
    });
  });
}

function stopCardDup() {
  let projectCard = document.querySelectorAll(".project-card");
  let projectContainer = document.querySelector(".projects");
  if (projectCard !== null && projectCard !== undefined) {
    projectCard.forEach((card) => {
      projectContainer.removeChild(card);
    });
  }
}

function blurPage() {
  let main = document.querySelector("main");
  main.classList.toggle("blur");
}

function exitButtonClick() {
  let exitButton = document.querySelector(".exit-button");
  let formContainer = document.querySelector(".title-form-container");
  exitButton.addEventListener("click", () => {
    document.body.removeChild(formContainer);
    let main = document.querySelector("main");
    main.classList.remove("blur");
  });
}

function removeForm() {
  let titleInput = document.querySelector(".project-form-input");
  let projectForm = document.querySelector(".title-form-container");
  document.body.removeChild(projectForm);
}
