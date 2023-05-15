import { indexOf } from "lodash";
import { projectArray } from ".";
import { todo } from "./objects";
import { projectObject } from "./objects";

//CREATES TITLE FORM POPUP
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

  
  });
}
//CREATES TODO FORM WHEN SOMEONE CLICKS BUTTON/RIGHT SIDE PAGE BUTTON
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
    clearContainer();
    projectCard.todoTasks.push(todo(todoTitle.value, todoDescription.value));
    test(projectCard);

    clearTodoForm();
    console.log(projectArray);
  });
}
//PUTS TODO CARDS INTO THE DOM/RIGHT SIDE PAGE
function test(projectCard) {
  let todoTaskContainer = document.querySelector(".lists");
  projectCard.todoTasks.forEach((obj) => {
    let todoTasks = document.createElement("div");
    todoTasks.classList.add("todoTask-container");
    todoTasks.textContent = obj.title;
    todoTaskContainer.appendChild(todoTasks);
  });
}

//ADDS PROJECTS TO DOM/LEFT SIDE PAGE CARDS
function addProjectCard(projectTitle) {
  const projectCard = document.createElement("div");
  const projectContainer = document.querySelector(".projects");

  projectCard.setAttribute("title", projectTitle.value);
  projectCard.textContent = projectTitle.value;
  projectCard.classList.add("project-card");
  projectContainer.appendChild(projectCard);
  loadTodo(projectTitle.value,projectObject(crypto.randomUUID(), projectCard.textContent));

  projectCard.addEventListener("click", () => {
    //CANT FIGURE IT OUT
    //NEED TO LOOK FOR CARD
  });
}



//CREATES TODO DOM/RIGHT SIDE PAGE
function loadTodo(projectTitle, projectCard) {
  //PUSH OBJECT INTO ARRAY FINALLY
  projectArray.push(projectCard);

  let todoContainer = document.querySelector(".lists");
  todoContainer.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.textContent = projectTitle;
  //
  let todoButton = document.createElement("button");
  todoButton.classList.add("todo-button");
  todoContainer.appendChild(h1);
  todoContainer.appendChild(todoButton);
  todoButton.addEventListener("click", () => {
    createTodoForm(projectCard);
  });
}


//CLEARS CONTAINER
function clearContainer() {
  let todoContainer = document.querySelector(".lists");
  let todoCards = document.querySelectorAll(".todoTask-container");

  if (todoCards !== null && todoCards !== undefined) {
    todoCards.forEach((card) => {
      todoContainer.removeChild(card);
    });
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