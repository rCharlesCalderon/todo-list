import _, { create } from "lodash";
import "./style.css";
import { createProjectForm } from "./projectDOM";
import { loadImportantTask } from "./projectDOM";
import { loadInbox } from "./projectDOM";
import { dueTodayInfo } from "./projectDOM";
import { loadTodayInfo } from "./projectDOM";

const createProject = (() => {
  let createProjectButton = document.querySelector(".create-project");
  createProjectButton.addEventListener("click", () => {
    createProjectForm();
  });
})();

const importantTasks = (() => {
  loadImportantTask();
})();

const inbox = (() => {
  loadInbox();
})();

const today = (() => {
  let todayButton = document.querySelector(".today");

  todayButton.addEventListener("click", () => {
    dueTodayInfo();
    loadTodayInfo();
  });
})();