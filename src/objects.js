export let listOfProjects = [];

export let importantTaskArray = [];
export let dueTodayArray = [];

import { createProjectCard, createProjectForm } from "./projectDOM";

export function storage() {
  let projectObj_serialized = JSON.stringify(listOfProjects);
  localStorage.setItem("listOfProjectsObjs", projectObj_serialized);
  let important_serialized = JSON.stringify(importantTaskArray);
  localStorage.setItem("importantObjs", important_serialized);
}

window.addEventListener("load", () => {
  localStorage.clear();
  document.querySelector(".inbox").click();
  if (localStorage.length !== 0) {
    let projectObj_deserialized = JSON.parse(
      localStorage.getItem("listOfProjectsObjs")
    );
    projectObj_deserialized.forEach((element) => {
      listOfProjects.push(element);
    });

    let important_deserialized = JSON.parse(
      localStorage.getItem("importantObjs")
    );

    important_deserialized.forEach((element) => {
      importantTaskArray.push(element);
    });

    document.querySelector(".inbox").click();
    createProjectCard();
  }
});
 

//loadTodayInfo() displayTodoTasks(project) createTaskCards(task)  createTaskCards(task)

export const todo = (title, description, date, priority, important) => {
  important = false;
  return { title, description, date, priority, important };
};

export const projectObject = (id, projectName, ...todoTasks) => {
  return { id, projectName, todoTasks };
};

export const project = (project) => {
  return { project };
};
