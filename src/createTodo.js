export { Todo, addTask }


function Todo(title, description, dueDate, priority) {
    this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.remove = function (selectedProject) {
            console.dir(this)
            let taskArr = selectedProject.tasks
            let taskIndex = taskArr.findIndex(task => task.title === this.title)
            selectedProject.tasks.splice(taskIndex, 1)

        }
}


function addTask(todo, project) {
    project.tasks.push(todo);
}
