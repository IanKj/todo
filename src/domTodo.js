export default function renderPage() {
    createHeader()
    createTaskInput()
    createListContainer()
    addTaskEventListener()
    createProjectContainer()
}

import { Todo, addTask } from './createTodo.js'
import { addProject } from './projects.js'

let projects = []


const content = document.querySelector('#content')

const createHeader = () => {
    let header = document.createElement('h1');
    header.innerText = 'Simple Todo App'
    content.appendChild(header)
}

const createTaskInput = () => {
    let inputForm = document.createElement('div')
    inputForm.classList.add('inputForm')
    let input = document.createElement('input')
    input.placeholder = 'what to do...'
    let inputVal = input.value
    let submitBtn = document.createElement('button')
    submitBtn.classList.add('addTaskBtn')
    submitBtn.innerText = 'Add'
    content.appendChild(inputForm)
    inputForm.appendChild(input)
    inputForm.appendChild(submitBtn)
}

const createListContainer = () => {
    let listContainer = document.createElement('div')
    listContainer.classList.add('listContainer')
    content.appendChild(listContainer)
    let list = document.createElement('ul')
    list.classList.add('list')
    listContainer.appendChild(list)
}

const createTodo = (todo) => {
    console.log("test")
    let list = document.querySelector('.list')
    let task = document.createElement('li')
    let deleteBtn = document.createElement('span')
    deleteBtn.innerText = 'X'
    task.innerText = todo.title
    task.appendChild(deleteBtn)
    list.appendChild(task)
}

const addTaskEventListener = () => {
    const submitBtn = document.querySelector('.addTaskBtn')
    submitBtn.addEventListener('click', function () {
        const input = document.querySelector('.inputForm input')
        const inputVal = input.value
        let todo = new Todo(inputVal)
        createTodo(todo)
        addTask(todo, projects[0])
        console.log(projects)
    }
    )
}

const createProjectContainer = () => {
    const projectContainer = document.createElement('div')
    const projectLabel = document.createElement('label')
    const projectSelection = document.createElement('select')
    const addProject = document.createElement('input')
    const addProjectBtn = document.createElement('button')

    projectContainer.classList.add('projectContainer')
    addProject.classList.add('addProject')
    addProjectBtn.classList.add('addProjectBtn')
    projectSelection.classList.add('projectSelection')

    projectLabel.innerText = 'Current project;'
    projectLabel.for = "project"

    projectSelection.name = 'project'
    projectSelection.appendChild(createDefaultProject())

    addProjectBtn.innerText = 'Add Project'

    projectContainer.appendChild(projectLabel)
    projectContainer.appendChild(projectSelection)
    projectContainer.appendChild(addProject)
    projectContainer.appendChild(addProjectBtn)

    content.appendChild(projectContainer)
    addProjectEventListener()
}

const createDefaultProject = () => {
    const defaultProject = document.createElement('option')
    defaultProject.value = 'daily tasks'
    defaultProject.innerText = 'Daily Tasks'

    addProject('daily tasks', projects)
    return defaultProject
}

const addProjectEventListener = () => {
    const addProjectBtn = document.querySelector('.addProjectBtn')

    addProjectBtn.addEventListener('click', function () {
        const projectName = document.querySelector('.addProject').value
        console.log("inside add project button")
        addProject(projectName, projects)
        console.log(projects)
        setProjects(projectName)
    })
}

const setProjects = (projectName) => {
    const projectList = document.querySelector('.projectSelection')
    const newProject = document.createElement('option')
    newProject.value = projectName
    newProject.innerText = projectName
    projectList.appendChild(newProject)
}