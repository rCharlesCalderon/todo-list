import _ from "lodash";
import "./style.css";
import { todo } from "./todo";
import { projectCreate } from "./projectDOM";



//turn individual player card into its own object
const projectObject = (project) => {
  return { project };
};
//project array
let projectArray = [];
let button = document.querySelector(".add-project");


//MAKE A PROJECT
button.addEventListener("click", () => {
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
  //

  //when the user presses the save button do this
  saveProject.addEventListener("click", () => {
    //create title object
    projectArray.push(projectObject(projectTitle.value));
    let test = projectArray.findIndex((title) => title.project);
    loadTodo(test);
    clear(projectTitleContainer);
    clearProjectCards();
    addProjectCard();
  });
});

//display each project object and put it in the projects
function addProjectCard() {
  projectArray.forEach((proj) => {
    const projects = document.querySelector(".projects");
    const projectCard = document.createElement("div");

    projectCard.classList.add("project-card");
    projectCard.setAttribute("data-id", projectArray.indexOf(proj));
    projects.appendChild(projectCard);
  });
}

//clear object
function clear(projectTitleContainer) {
  document.body.removeChild(projectTitleContainer);
}
//stop cards from duplicating
function clearProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");
  const project = document.querySelector(".projects");
  if (projectCards !== null && projectCards !== undefined) {
    projectCards.forEach((card) => {
      project.removeChild(card);
    });
  }
}

function loadTodo(t) {
  console.log(t);
  console.log(projectArray);
}