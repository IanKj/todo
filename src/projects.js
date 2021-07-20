export { addProject }

function Project(title) {
    this.title = title;
    this.value = title
    this.tasks = [];
}

function addProject(title, projects) {
    const newProject = new Project(title)
    projects.push(newProject)

}
