import { projectArray } from ".";
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
    const projectCard = document.createElement("div");
    const projectContainer = document.querySelector(".projects");
    projectCard.textContent = projectTitle.value;
    projectCard.classList.add("project-card");
    projectContainer.appendChild(projectCard);
    addProject(projectCard);
  });
}

function clearTitleForm() {
  const projectTitleContainer = document.querySelector(".project-container");
  document.body.removeChild(projectTitleContainer);

}

function addProject(project) {
 Object.assign(project, projectArray[0]);
 console.log(projectArray);

 project.addEventListener("click", () => {});
}
