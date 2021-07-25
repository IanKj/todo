export { checkForDuplicate, createEditDiv, createEditOptions }

const checkForDuplicate = function (inputVal, projectToCheck) {
    const titles = projectToCheck.map(task => task.title)
    if (titles.includes(inputVal)) {
        console.log('already did that')
        return true
    }
}

const createEditDiv = function (parentToAddTo) {
    console.log('creating div..')
    const optionsContainer = document.createElement('div')
    optionsContainer.classList.add('editProjectContent')
    const removeProject = document.createElement('p')
    removeProject.id = 'removeProject'
    removeProject.innerText = 'Remove project'
    const renameProject = document.createElement('p')
    renameProject.innerText = 'Rename project'
    optionsContainer.appendChild(removeProject)
    optionsContainer.appendChild(renameProject)
    optionsContainer.addEventListener('click', e => {
        e.stopPropagation()
    })
    parentToAddTo.appendChild(optionsContainer)
}


const createEditOptions = function (e) {
    if ((e.target !== e.currentTarget) && !e.target.nextElementSibling) {
        const parentElement = e.target.parentElement
        console.log(parentElement)
        createEditDiv(parentElement)
        const editProjectContent = document.querySelector('.editProjectContent')
        document.addEventListener('click', function (e) {
            const isClickInsideElement = parentElement.contains(e.target)
            if (!isClickInsideElement && editProjectContent) {
                editProjectContent.remove()
            }
        })
    }
}

//event listener on remove option
//compare dom project node text to projects array titles
//removes the matched project