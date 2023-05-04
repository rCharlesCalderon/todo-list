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
let addProject = document.querySelector(".add-project");

//MAKE A PROJECT
addProject.addEventListener("click", () => {
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
});


