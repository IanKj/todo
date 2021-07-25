export { addProject }

function Project(title) {
    this.title = title;
    this.value = title
    this.tasks = [];
}

function addProject(title, projects) {
    const newProject = new Project(title)
    newProject.remove = function (projectsArr, currentDomProjectText) {
        let projectIndex = projectsArr.findIndex(project => project.title === currentDomProjectText)
        projectsArr.splice(projectIndex, 1)
    }
    projects.push(newProject)

}
