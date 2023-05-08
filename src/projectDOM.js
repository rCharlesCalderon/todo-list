import { projectArray } from ".";
import { todo } from "./objects";
import { projectObject } from "./objects";

export function createTitleForm() {
  const projectTitleContainer = document.createElement("div");
  projectTitleContainer.classList.add("project-container");
  document.body.appendChild(projectTitleContainer);
  const projectH1 = document.createElement("h1");
  projectH1.textContent = "Title";
  projectTitleContainer.appendChild(projectH1);
  const projectTitle = document.createElement("input");
  projectTitle.classList.add("project-title");
  projectTitleContainer.appendChild(projectTitle);
  const saveProject = document.createElement("button");
  saveProject.classList.add("save-button");
  projectTitleContainer.appendChild(saveProject);

  saveProject.addEventListener("click", () => {
    projectArray.push(projectObject(projectTitle.value));
    clearTitleForm();
    addProjectCard(projectTitle);
    loadTodo(projectTitle);
    console.log(projectObject());
  });
}

function loadTodo(project) {
  let todoContainer = document.querySelector(".lists");
  todoContainer.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.textContent = project.value;
  //
  let todoButton = document.createElement("button");
  todoButton.classList.add("todo-button");
  todoContainer.appendChild(h1);
  todoContainer.appendChild(todoButton);
  todoButton.addEventListener("click", () => {
    createTodoForm(project);
  });
}

function createTodoForm(project) {
  let todoFormContainer = document.createElement("div");
  todoFormContainer.classList.add("todo-container");
  document.body.appendChild(todoFormContainer);
  let todoTitle = document.createElement("input");
  let todoDescription = document.createElement("input");
  todoDescription.type = "text";
  todoFormContainer.appendChild(todoTitle);
  todoFormContainer.appendChild(todoDescription);
  let saveTodo = document.createElement("button");
  saveTodo.classList.add("save-todo");
  todoFormContainer.appendChild(saveTodo);

  saveTodo.addEventListener("click", () => {});
}

function clearTitleForm() {
  const projectTitleContainer = document.querySelector(".project-container");
  document.body.removeChild(projectTitleContainer);
}

function addProjectCard(projectTitle) {
  const projectCard = document.createElement("div");
  const projectContainer = document.querySelector(".projects");
  projectCard.textContent = projectTitle.value;
  projectCard.classList.add("project-card");
  projectContainer.appendChild(projectCard);
  projectCard.addEventListener("click", () => {});
}

function addProject(project) {
  Object.assign(project, projectArray[0]);
  console.log(projectArray);

  project.addEventListener("click", () => {});
}
