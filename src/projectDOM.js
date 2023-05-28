import { forEach, head, indexOf } from "lodash";
import { listOfProjects } from "./objects";
import { projectObject } from "./objects";
import { datalistOption } from "./objects";
import { todo } from "./objects";
import bullet from "./images/bullet-list.png";
import important from "./images/important.png";
import { importantTaskArray } from "./objects";

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
  //SAVE BUTTON
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
    createProjectCard(titleInput.value);
    todoDOM(project);
  });
}

function todoDOM(project) {
  let todoContainer = document.querySelector(".todo-body");
  todoContainer.innerHTML = "";
  let addTaskButton = document.createElement("button");
  todoContainer.appendChild(addTaskButton);
  addTaskButton.classList.add("add-task");
  todoContainer.appendChild(addTaskButton);
  addTaskButton.textContent = "+";
  addTaskButton.addEventListener("click", () => {
    blurPage();
    todoForm(project);
  });
}

function todoForm(projectObject) {
  let todoFormContainer = document.createElement("div");
  todoFormContainer.classList.add("todo-form-container");
  document.body.appendChild(todoFormContainer);
  //TODO NAME
  todoName();
  //DESCRIPTION
  todoDescription();
  //DATE
  todoDate();
  //Priority
  priority();
  //Save button
  todoTaskSave(projectObject);
  ///
}
function todoTaskSave(project) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let button = document.createElement("button");
  button.classList.add("save-todo");

  button.addEventListener("click", () => {
    removeBlur();
    let todoName = document.querySelector(".todo-name").value;
    let todoDescription = document.querySelector(".todo-description").value;
    let todoDate = document.querySelector(".todo-date").value;
    let priorityInput = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    let todoObject = todo(todoName, todoDescription, todoDate, priorityInput);
    project.todoTasks.push(todoObject);
    document.body.removeChild(document.querySelector(".todo-form-container"));
    console.log(listOfProjects);
    //CREATE A FUNCTION THAT WILL DISPLAY THE CARDS WITHIN THE OBJECT
    displayTodoTasks(project);
  });
  todoFormContainer.appendChild(button);
}
function displayTodoTasks(project) {
  stoptaskDup();
  let todoBody = document.querySelector(".todo-body");

  project.todoTasks.forEach((task) => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("task-card");
    let starImg = new Image();
    starImg.src = important;
    starImg.classList.add("important");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "remove";
    let taskTitle = document.createElement("p");
    taskTitle.textContent = task.title;
    let taskDate = document.createElement("p");
    taskDate.textContent = task.date;
    taskDate.classList.add("task-date");

    cardContainer.appendChild(checkbox);
    cardContainer.appendChild(starImg);
    cardContainer.appendChild(taskTitle);
    cardContainer.appendChild(taskDate);
    todoBody.appendChild(cardContainer);
    importantTasks(task, starImg);
    checkboxRemove(cardContainer, project, task, checkbox);
  });
}

function importantTasks(task, starImg) {
  starImg.addEventListener("click", () => {
    starImg.classList.toggle("yellow-star");
    if (starImg.classList.contains("yellow-star")) {
      task.important = true;
      importantTaskArray.push(task);
    } else {
      task.important = false;
    }
  });
}
export function loadImportantTask() {
  let importantNav = document.querySelector(".important-nav");

  importantNav.addEventListener("click", () => {
    let test = importantTaskArray.filter((x) => x.important === true);
    console.log(test);
  });
}

function checkboxRemove(cardContainer, projectObject, task, checkbox) {
  let todoBody = document.querySelector(".todo-body");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      projectObject.todoTasks.splice(indexOf(task), 1);

      todoBody.removeChild(cardContainer);
      console.log(listOfProjects);
    }
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
  priorityLow.checked = true;
  //

  todoLabelContainer.appendChild(priorityHigh);
  todoLabelContainer.appendChild(priorityMedium);
  todoLabelContainer.appendChild(priorityLow);
  todoFormContainer.appendChild(todoLabelContainer);
}

function todoDate() {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoDate = document.createElement("input");
  todoDate.className = "todo-form-input";
  let date = document.createElement("span");
  date.className = "todoform-text";
  date.textContent = "Date";
  todoFormContainer.appendChild(date);
  todoDate.type = "date";
  todoDate.classList.add("todo-date");
  todoFormContainer.appendChild(todoDate);
}

function todoDescription() {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoTaskDesc = document.createElement("input");
  todoTaskDesc.className = "todo-form-input";
  let todoDesc = document.createElement("span");
  todoDesc.className = "todoform-text";
  todoDesc.textContent = "Description";
  todoFormContainer.appendChild(todoDesc);
  todoTaskDesc.placeholder = "Description";
  todoTaskDesc.classList.add("todo-description");
  todoFormContainer.appendChild(todoTaskDesc);
}

function todoName() {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoTaskName = document.createElement("input");
  todoTaskName.className = "todo-form-input";
  let taskName = document.createElement("span");
  taskName.className = "todoform-text";
  taskName.textContent = "Task name";
  todoFormContainer.appendChild(taskName);
  todoTaskName.placeholder = "Task name";
  todoTaskName.classList.add("todo-name");
  todoFormContainer.appendChild(todoTaskName);
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
    let img = new Image();
    img.src = bullet;
    img.classList.add("bullet-img");
    let projectCard = document.createElement("div");
    projectCard.appendChild(img);
    let projectTask = document.createElement("span");
    projectTask.textContent = project.projectName;
    projectCard.appendChild(projectTask);
    projectCard.classList.add("project-card");

    projectContainer.appendChild(projectCard);
    projectCard.addEventListener("click", () => {
      todoDOM(project);
      todoHeader(project);
      displayTodoTasks(project);
      console.log(listOfProjects);
    });
  });
}
function stoptaskDup() {
  let projectCard = document.querySelectorAll(".task-card");
  let projectContainer = document.querySelector(".todo-body");
  if (projectCard !== null && projectCard !== undefined) {
    projectCard.forEach((card) => {
      projectContainer.removeChild(card);
    });
  }
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

function removeBlur() {
  let main = document.querySelector("main");
  main.classList.remove("blur");
}
