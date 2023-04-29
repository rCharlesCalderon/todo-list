export function projectCreate() {
  const project = document.querySelector(".projects");
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  let button = document.querySelector(".add-project");
  project.insertBefore(projectCard, button);
 
}
