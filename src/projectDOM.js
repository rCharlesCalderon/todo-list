import { forEach } from "lodash";

export function projectCreate() {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  let projectContainer = document.querySelector(".projects");
  let button = document.querySelector(".add-project");
  projectContainer.insertBefore(projectCard, button);
}
