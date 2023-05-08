import _, { create } from "lodash";
import "./style.css";
import { todo } from "./objects";
import { projectCreate } from "./projectDOM";
import { createTitleForm } from "./projectDOM";
import { clearTitleForm } from "./projectDOM";

//project array
export let projectArray = [];
let addProject = document.querySelector(".add-project");

//MAKE A PROJECT
addProject.addEventListener("click", () => {
  createTitleForm();

  //
});
