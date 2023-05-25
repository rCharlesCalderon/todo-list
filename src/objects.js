export let listOfProjects = [];

export const todo = (title, description, date, priority) => {
  return { title, description, date, priority };
};

export const projectObject = (id, projectName, ...todoTasks) => {
  return { id, projectName, todoTasks };
};

export const project = (project) => {
  return { project };
};
