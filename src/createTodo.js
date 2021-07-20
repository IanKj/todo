export { Todo, addTask }


function Todo(title, description, dueDate, priority) {
    this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.id = Date.now()

}

function addTask(todo, project) {
    todo.remove = function () {
        console.dir(project)
        let taskArr = project
        let taskIndex = taskArr.findIndex(task => task.title === todo.title)
        project.splice(taskIndex, 1)

    }
    project.push(todo);
}

