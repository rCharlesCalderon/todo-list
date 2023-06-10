export let listOfProjects = [];

export let importantTaskArray = [];
export let dueTodayArray = [];



export function storage() {

}

 
 window.addEventListener("load", () => {
  localStorage.clear()
  console.log(localStorage)
  console.log(listOfProjects)
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
