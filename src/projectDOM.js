export function projectCreate() {
  const project = document.querySelector(".projects");
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  project.appendChild(projectCard);
}
