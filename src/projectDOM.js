import { head } from "lodash";
import { listOfProjects } from "./objects";
import { projectObject } from "./objects";
import { datalistOption } from "./objects";

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
    todoForm();
  });
}

function todoForm() {
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
  todoDate.type = "date";
  todoDate.className = "todo-date";
  //Priority
  //
  let todoLabelContainer = document.createElement("div");
  todoLabelContainer.className = "todo-label-container";
  let todoLabel = document.createElement("label");
  //

  for (let i = 0; i < 3; i++) {
    let todoRadioBox = document.createElement("input");
    todoRadioBox.type = "radio";
    todoRadioBox.checked;
    let img = document.createElement("img");
    img.src = "../src/images/flag.png";
    img.classList.add("radio-checkbox", `radio-img${i}`);
    todoLabel.appendChild(todoRadioBox);
    todoLabel.appendChild(img);
    todoLabelContainer.appendChild(todoLabel);
  }

  todoFormContainer.appendChild(date);
  todoFormContainer.appendChild(todoDate);
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
