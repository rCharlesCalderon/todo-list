import { indexOf } from "lodash";
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
  //STEP 1
  saveProject.addEventListener("click", () => {
    //clears title form
    clearTitleForm();
    //simply adds a project card to project nothing else
    addProjectCard(projectTitle);

    //LOADS TODO TASK DOM/BUTTON
  });
}

function createTodoForm(projectCard) {
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
  //WHAT TO DOOOOO
  //PASS THE CARD AS AN OBJECT?????
  saveTodo.addEventListener("click", () => {
    let todoTaskContainer = document.querySelector(".lists");
    clearContainer();
    projectCard.todoTasks.push(todo(todoTitle.value, todoDescription.value));
    projectCard.todoTasks.forEach((obj) => {
      let todoTasks = document.createElement("div");
      todoTasks.classList.add("todoTask-container");
      todoTasks.textContent = obj.title;
      todoTaskContainer.appendChild(todoTasks);
    });
    clearTodoForm();
    console.log(projectArray);
  });
}

function clearContainer() {
  let todoContainer = document.querySelector(".lists");
  let todoCards = document.querySelector(".todoTask-container");
  //querySelectorAll Doesnt work

  if (todoCards !== null && todoCards !== undefined) {
    todoContainer.removeChild(todoCards);
  }
}

function clearTodoForm() {
  let todoForm = document.querySelector(".todo-container");
  document.body.removeChild(todoForm);
}

function clearTitleForm() {
  const projectTitleContainer = document.querySelector(".project-container");
  document.body.removeChild(projectTitleContainer);
}

//REDO MAYBE?
// LOOK THROUGH THE ARRAY AND MAKE A CARD USING THAT???????????
//load cards into DOM
function addProjectCard(projectTitle) {
  const projectCard = document.createElement("div");
  const projectContainer = document.querySelector(".projects");

  projectCard.setAttribute("title", projectTitle.value);
  projectCard.textContent = projectTitle.value;
  projectCard.classList.add("project-card");
  projectContainer.appendChild(projectCard);
  //HAPPENS FIRST THEN PUSHES OBJECT TO ARRAY IN LOADTODO JUST HAPPENS LATER
  loadTodo(projectTitle, projectObject(crypto.randomUUID(), projectCard));

  projectCard.addEventListener("click", () => {});
}

function loadTodo(projectTitle, projectCard) {
  //PUSH OBJECT INTO ARRAY FINALLY
  projectArray.push(projectCard);

  let todoContainer = document.querySelector(".lists");
  todoContainer.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.textContent = projectTitle.value;
  //
  let todoButton = document.createElement("button");
  todoButton.classList.add("todo-button");
  todoContainer.appendChild(h1);
  todoContainer.appendChild(todoButton);
  todoButton.addEventListener("click", () => {
    todoCards();
    createTodoForm(projectCard);
  });
}
function todoCards(projectObject) {}