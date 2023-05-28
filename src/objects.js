export let listOfProjects = [];
export let importantTaskArray = [];

export const todo = (title, description, date, priority, important) => {
  return { title, description, date, priority, important };
};

export const projectObject = (id, projectName, ...todoTasks) => {
  return { id, projectName, todoTasks };
};

export const project = (project) => {
  return { project };
};
