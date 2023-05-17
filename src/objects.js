export const todo = (title, description) => {
  return { title, description };
};

export const projectObject = (projectName, ...todoTasks) => {
  return { projectName, todoTasks };
};

export const project = (project) => {
  return { project };
};