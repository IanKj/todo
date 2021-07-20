export default function renderPage() {
    createHeader()
    createTaskInput()
    createListContainer()
    createProjectContainer()
}

import { Todo, addTask } from './createTodo.js'
import { addProject } from './projects.js'
import { checkForDuplicate } from './helpers.js'

let projects = []


const content = document.querySelector('#content')

const rightSide = Object.assign(document.createElement('div'), { classList: 'rightSide' })
const leftSide = Object.assign(document.createElement('div'), { classList: 'leftSide' })
//const leftSide = document.createElement('div')
content.appendChild(leftSide)
content.appendChild(rightSide)

//create header
const createHeader = () => {
    let header = document.createElement('h1');
    header.innerText = 'To-Do Application'
    rightSide.appendChild(header)
}

//create task input and submit button
const createTaskInput = () => {
    let inputForm = document.createElement('form')
    inputForm.setAttribute('onSubmit', 'return false')
    inputForm.addEventListener('submit', addTaskEventListener)
    inputForm.classList.add('inputForm')
    let input = document.createElement('input')
    input.placeholder = 'what to do...'
    input.setAttribute('required', '')
    input.setAttribute('maxlength', '15')
    let submitBtn = document.createElement('input')
    submitBtn.classList.add('addTaskBtn')
    submitBtn.value = 'Add'
    submitBtn.type = 'submit'
    rightSide.appendChild(inputForm)
    inputForm.appendChild(input)
    inputForm.appendChild(submitBtn)
}

//create container for the list
const createListContainer = () => {
    let listContainer = document.createElement('div')
    listContainer.classList.add('listContainer')
    rightSide.appendChild(listContainer)
    let list = document.createElement('ul')
    list.classList.add('list')
    listContainer.appendChild(list)
}

// function to add new task LI to DOM
const createTodo = (currentProject, todo) => {
    let list = document.querySelector('.list')
    let task = document.createElement('li')
    let deleteBtn = document.createElement('span')
    task.classList.add('listItem')
    task.innerText = todo.title
    task.setAttribute('id', todo.id)
    deleteBtn.innerText = 'X'
    addRemoveEventListener(deleteBtn, todo)
    task.appendChild(deleteBtn)
    list.appendChild(task)
}

//listen to add button, add todo to project array and DOM
const addTaskEventListener = () => {
    const input = document.querySelector('.inputForm input')
    let inputVal = input.value
    let todo = new Todo(inputVal)

    const projectToAddTo = getCurrProjectObject()

    if (!checkForDuplicate(inputVal, projectToAddTo.tasks)) {
        addTask(todo, projectToAddTo.tasks)
        createTodo(projectToAddTo, todo)
        console.dir(projects)
        input.focus()
        input.value = ""
    }
}

//add remove event listener - not attached
const addRemoveEventListener = (span, todo) => {
    span.addEventListener('click', (e) => {
        console.dir(e.target.parentElement)
        let parentElement = e.target.parentElement
        parentElement.remove()
        todo.remove()
    })
}
//project code

//check for selected project, returns OBJECT of current project
const getCurrProjectObject = () => {
    const selectedProject = document.querySelector('.activeProject')
    let projectToReturn
    projects.forEach(project => {
        if (project.title === selectedProject.innerText) {
            projectToReturn = project
        }
    })
    return projectToReturn
}

//create project manager in DOM
const createProjectContainer = () => {
    const projectContainer = document.createElement('div')
    const projectLabel = document.createElement('label')
    const projectSelectionContainer = document.createElement('div')
    const projectSelectionList = document.createElement('ul')
    const submitProjectForm = document.createElement(('form'))
    const addProject = document.createElement('input')
    const addProjectBtn = document.createElement('input')

    projectContainer.classList.add('projectContainer')
    addProject.classList.add('addProject')
    addProjectBtn.classList.add('addProjectBtn')
    projectSelectionContainer.classList.add('projectSelectionContainer')
    projectSelectionList.classList.add('projectSelectionList')


    submitProjectForm.setAttribute('onsubmit', 'return false')
    submitProjectForm.addEventListener('submit', addProjectEventListener)
    addProject.setAttribute('required', '')
    addProject.setAttribute('maxlength', '15')
    addProjectBtn.value = 'Add Project'
    addProjectBtn.type = 'submit'

    submitProjectForm.appendChild(addProject)
    submitProjectForm.appendChild(addProjectBtn)
    projectSelectionContainer.appendChild(projectSelectionList)
    projectContainer.appendChild(projectSelectionContainer)
    projectContainer.appendChild(submitProjectForm)

    leftSide.appendChild(projectContainer)
    createDefaultProject()
}

//initialize project management field
const createDefaultProject = () => {
    const defaultProject = document.createElement('li')
    defaultProject.classList.add('activeProject')
    defaultProject.innerText = 'Daily Tasks'
    addProject(defaultProject.innerText, projects)
    setProjects(defaultProject.innerText)
    return defaultProject
}

//listen to add project button and add to projects array and DOM
const addProjectEventListener = () => {
    const taskInput = document.querySelector('.inputForm input')
    let projectName = document.querySelector('.addProject')
    if (!checkForDuplicate(projectName.value, projects)) {
        addProject(projectName.value, projects)
        setProjects(projectName.value)
        projectName.value = ""
        taskInput.focus()
        reloadTodoList(getCurrProjectObject())
        console.dir(projects)
    }
}

//helper for add project listener - not attached
const setProjects = (projectName) => {
    const projectList = document.querySelector('.projectSelectionList')
    const oldProject = document.querySelector('.activeProject')
    if (oldProject) {
        oldProject.classList.remove('activeProject')
    }
    const newProject = document.createElement('li')
    newProject.innerText = projectName
    newProject.classList.add('activeProject')
    newProject.addEventListener('click', function (e) {
        const currentProject = document.querySelector('.activeProject')
        currentProject.classList.remove('activeProject')
        e.target.classList.add('activeProject')
        reloadTodoList(getCurrProjectObject())
    })
    projectList.appendChild(newProject)
}

//relead list, to be used when switching between projects
const reloadTodoList = (currentProject) => {
    console.dir(currentProject)
    clearList()
    let list = document.querySelector('.list')
    for (let projectTask of currentProject.tasks) {
        let task = document.createElement('li')
        task.classList.add('listItem')
        let deleteBtn = document.createElement('span')
        task.innerText = projectTask.title
        task.setAttribute('id', projectTask.id)
        deleteBtn.innerText = 'X'
        addRemoveEventListener(deleteBtn, projectTask)
        task.appendChild(deleteBtn)
        list.appendChild(task)
    }
}

//function to clear list - not attached
const clearList = () => {
    let list = document.querySelector('.list')
    list.querySelectorAll('*').forEach(n => n.remove())
}