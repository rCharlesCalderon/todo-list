import _, { indexOf } from "lodash";
import "./style.css";
import { todo } from "./todo";
import { projectCreate } from "./projectDOM";
let projectArray = [];
let button = document.querySelector(".add-project");

button.addEventListener("click", () => {
  let projectContainer = document.querySelector(".projects");
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectContainer.appendChild(projectCard);
  projectArray.push(projectCard);
  projectArray.forEach((card) => {
    projectCard.dataset = projectArray.indexOf(card);
  });
});
