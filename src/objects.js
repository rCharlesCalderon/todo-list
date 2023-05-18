export const todo = (title, description) => {
  return { title, description };
};

export const projectObject = (id, projectName, ...todoTasks) => {
  return { id, projectName, todoTasks };
};

export const project = (project) => {
  return { project };
};