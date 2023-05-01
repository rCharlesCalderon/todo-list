import _ from "lodash";
import "./style.css";
import { todo } from "./todo";
import { projectCreate } from "./projectDOM";
const projectObject = (project) => {
  return { project };
};
let projectArray = [];
let button = document.querySelector(".add-project");

button.addEventListener("click", () => {
  let projectContainer = document.querySelector(".projects");
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectContainer.appendChild(projectCard);
  projectArray.push(projectObject(projectCard));
  projectArray.forEach((card) => {
    projectCard.setAttribute("data-id", projectArray.indexOf(card));
  });
  //add button in projectCard
  let projectCardButton = document.createElement("button");
  projectCardButton.classList.add("project-card-button");

  projectCard.appendChild(projectCardButton);

  //

  //

  projectCardButton.addEventListener("click", () => {
    const list = document.querySelector(".lists");
    let listButton = document.createElement("button");
    listButton.classList.add("list-button");
    list.appendChild(listButton);
  });

  console.log(projectArray);
});
