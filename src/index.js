import _, { create } from "lodash";
import "./style.css";
import { createProjectForm } from "./projectDOM";

const createProject = (() => {
  let createProjectButton = document.querySelector(".create-project");
  createProjectButton.addEventListener("click", () => {
    createProjectForm();
  });
})();


