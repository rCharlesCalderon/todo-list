import { projectCreate } from "./projectDOM";
const addProject = document.querySelector("add-project");
addProject.addEventListener("click", () => {
  projectCreate();
});
