export { addProject }



function Project(name) {
    this.name = name;
    this.tasks = [];
}

function addProject(name, project) {
    const newProject = new Project(name)
    project.push(newProject)

}
