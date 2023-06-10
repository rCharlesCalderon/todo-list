import { listOfProjects } from "./objects";
import { projectObject } from "./objects";
import { datalistOption } from "./objects";
import { todo } from "./objects";
import bullet from "./images/bullet-list.png";
import star from "./images/star.png";
import info from "./images/information.png";
import edit from "./images/edit.png";
import { dueTodayArray } from "./objects";
import { importantTaskArray } from "./objects";
import { storage } from "./objects";

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

    storage();

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
    //HERE
    document.body.removeChild(document.querySelector(".todo-form-container"));
    console.log(listOfProjects);
    //CREATE A FUNCTION THAT WILL DISPLAY THE CARDS WITHIN THE OBJECT
    stoptaskDup();
    displayTodoTasks(project);
  });
  todoFormContainer.appendChild(button);
}
function stoptaskDup(project) {
  let projectContainer = document.querySelector(".todo-body");
  let projectCard = document.querySelectorAll(".task-card");
  let starImg = document.querySelector("yellow-star");
  let importantStar = document.querySelector(".important > img.yellow-star");
  if (projectCard !== null && projectCard !== undefined) {
    projectCard.forEach((card) => {
      projectContainer.removeChild(card);
    });
  }
}

export function displayTodoTasks(project) {
  let todoBody = document.querySelector(".todo-body");
  project.todoTasks.forEach((task) => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("task-card");

    let cardNav = document.createElement("div");
    cardNav.classList.add("card-nav");
    cardContainer.appendChild(cardNav);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "remove";
    cardNav.appendChild(checkbox);

    let taskTitle = document.createElement("p");
    taskTitle.textContent = task.title;
    taskTitle.classList.add("task-name");
    cardNav.appendChild(taskTitle);

    let starImg = new Image();
    starImg.src = star;
    starImg.classList.add("important", "star-img");
    cardNav.appendChild(starImg);

    let editImg = new Image();
    editImg.src = edit;
    editImg.classList.add("important");
    cardNav.appendChild(editImg);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskDescription.classList.add("task-description");
    cardContainer.appendChild(taskDescription);

    let taskDate = document.createElement("p");
    taskDate.textContent = task.date;
    taskDate.classList.add("task-date");
    cardContainer.appendChild(taskDate);

    if (task.priority === "High") {
      cardContainer.classList.add("high");
    } else if (task.priority === "Medium") {
      cardContainer.classList.add("medium");
    } else {
      cardContainer.classList.add("low");
    }
    todoBody.appendChild(cardContainer);

    importantTasks(task, starImg);
    editTasks(task, editImg, project);
    checkboxRemove(cardContainer, project, task, checkbox);
  });
}

function editTasks(task, starImg, project) {
  starImg.addEventListener("click", () => {
    let todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("todo-form-container");
    document.body.appendChild(todoFormContainer);
    createEditTaskName(task);
    createEditTaskDescription(task);
    createEditTaskDate(task);
    createEditTaskPriority(task);
    saveEditTask(task, project);
  });
}
function saveEditTask(task, project) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    let taskName = document.querySelector(".todo-name").value;
    let taskDesc = document.querySelector(".todo-description").value;
    let taskDate = document.querySelector(".todo-date").value;
    let taskPriority = document.getElementsByName("radio");
    task.title = taskName;
    task.description = taskDesc;
    task.date = taskDate;
    if (taskPriority[0].checked) {
      task.priority = taskPriority[0].value;
    } else if (taskPriority[1].checked) {
      task.priority = taskPriority[1].value;
    } else if (taskPriority[2].checked) {
      task.priority = taskPriority[2].value;
    }
    document.body.removeChild(todoFormContainer);
    stoptaskDup();
    displayTodoTasks(project);
    console.log(taskPriority);
    console.log(listOfProjects);
  });
  todoFormContainer.appendChild(saveButton);
}
function createEditTaskPriority(task) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let priorityTitle = document.createElement("span");
  priorityTitle.textContent = task.priority;
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
  //
  if (task.priority === "Low") {
    priorityLow.checked = true;
  } else if (task.priority === "Medium") {
    priorityMedium.checked = true;
  } else if (task.priority === "High") {
    priorityHigh.checked = true;
  }
  todoLabelContainer.appendChild(priorityHigh);
  todoLabelContainer.appendChild(priorityMedium);
  todoLabelContainer.appendChild(priorityLow);
  todoFormContainer.appendChild(todoLabelContainer);
}
function createEditTaskDate(task) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoTaskDate = document.createElement("input");
  todoTaskDate.type = "date";
  todoTaskDate.className = "todo-form-input";
  todoTaskDate.value = task.date;
  todoTaskDate.classList.add("todo-date");
  let date = document.createElement("span");
  date.className = "todoform-text";
  date.textContent = "Date";
  todoFormContainer.appendChild(date);
  todoFormContainer.appendChild(todoTaskDate);
}
function createEditTaskDescription(task) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoTaskDesc = document.createElement("input");
  todoTaskDesc.className = "todo-form-input";
  todoTaskDesc.value = task.description;
  todoTaskDesc.classList.add("todo-description");
  let todoDesc = document.createElement("span");
  todoDesc.className = "todoform-text";
  todoDesc.textContent = "Description";
  todoFormContainer.appendChild(todoDesc);
  todoFormContainer.appendChild(todoTaskDesc);
}
function createEditTaskName(task) {
  let todoFormContainer = document.querySelector(".todo-form-container");
  let todoTaskName = document.createElement("input");
  todoTaskName.className = "todo-form-input";
  let taskName = document.createElement("span");
  taskName.className = "todoform-text";
  todoFormContainer.appendChild(taskName);
  todoTaskName.value = task.title;
  todoTaskName.classList.add("todo-name");
  todoFormContainer.appendChild(todoTaskName);
}
function importantTasks(task, starImg) {
  starImg.addEventListener("click", () => {
    starImg.classList.toggle("yellow-star");
    if (
      starImg.classList.contains("yellow-star") &&
      !importantTaskArray.includes(task.important)
    ) {
      importantTaskArray.push(task);
      task.important = true;
    } else {
      task.important = false;
    }
  });
  if (task.important === true) {
    starImg.classList.add("yellow-star");
  }
}
export function loadImportantTask() {
  let importantNav = document.querySelector(".important-nav");

  importantNav.addEventListener("click", () => {
    importantTaskArray = importantTaskArray.filter((x) => x.important === true);
    let todoBody = document.querySelector(".todo-body");
    let todoHeader = document.querySelector(".todo-header");
    todoHeader.textContent = "Important";
    todoBody.innerHTML = "";
    importantTaskArray.forEach((task) => {
      createTaskCards(task);
    });
  });
}

function createTaskCards(task) {
  let todoBody = document.querySelector(".todo-body");
  let todoHeader = document.querySelector(".todo-header");
  let importantTask = document.createElement("div");
  importantTask.classList.add("task-card");

  let taskNav = document.createElement("div");
  taskNav.classList.add("card-nav");
  importantTask.appendChild(taskNav);

  let taskTitle = document.createElement("p");
  taskTitle.textContent = task.title;
  taskTitle.classList.add("task-title", "margin-left");

  taskNav.appendChild(taskTitle);

  let starImg = document.createElement("img");
  starImg.src = star;
  starImg.classList.add("yellow-star", "align-right");
  taskNav.appendChild(starImg);

  let taskDescription = document.createElement("p");
  taskDescription.textContent = task.description;
  taskDescription.classList.add("task-description");
  importantTask.appendChild(taskDescription);

  let taskDate = document.createElement("p");
  taskDate.textContent = task.date;
  taskDate.classList.add("task-date");
  importantTask.appendChild(taskDate);

  todoBody.appendChild(importantTask);

  starImg.addEventListener("click", () => {
    starImg.classList.remove("yellow-star");
    task.important = false;
    todoBody.removeChild(importantTask);
    importantTaskArray.splice(indexOf(task), 1);
  });
}

function checkboxRemove(cardContainer, projectObject, task, checkbox) {
  let todoBody = document.querySelector(".todo-body");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      projectObject.todoTasks.splice(indexOf(task), 1);
      importantTaskArray.splice(indexOf(task), 1);

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

export function loadInbox() {
  let inboxButton = document.querySelector(".inbox");
  inboxButton.addEventListener("click", () => {
    let header = document.querySelector(".todo-header");
    header.innerHTML = "";
    let headerTitle = document.createElement("p");
    headerTitle.textContent = "Inbox";
    header.appendChild(headerTitle);
    stoptaskDup();
    listOfProjects.forEach((obj) => {
      displayTodoTasks(obj);
    });
    console.log("wdada");
  });
}

export function dueTodayInfo() {
  let todayButton = document.querySelector(".today");
  let currentDate = new Date().toJSON().slice(0, 10);

  listOfProjects.forEach((project) => {
    project.todoTasks.filter((dueTask) => {
      if (dueTask.date === currentDate && !dueTodayArray.includes(dueTask)) {
        dueTodayArray.push(dueTask);
      }
    });
  });
}

export function loadTodayInfo() {
  stoptaskDup();
  listOfProjects.forEach((obj) => {
    displayTodoTasks(obj);
  });
}
