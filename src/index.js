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
//when the user presses the button create a project card and push it into the array
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
  projectCardButton.textContent = "add project";

  projectCard.appendChild(projectCardButton);

  //

  //
  //when the user presses the button bring up a form and tie it to its playerCard object
  projectCardButton.addEventListener("click", () => {
    const list = document.querySelector(".lists");
    let listButton = document.createElement("button");
    listButton.classList.add("list-button");
    listButton.textContent = "Add List";
    list.appendChild(listButton);
  });

  console.log(projectArray);
});
