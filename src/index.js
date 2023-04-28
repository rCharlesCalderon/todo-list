import _ from "lodash";
import "./style.css";
import { todo } from "./todo";
import { projectCreate } from "./projectDOM";
const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", () => {
  projectCreate();
});
