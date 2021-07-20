export { checkForDuplicate }

const checkForDuplicate = function (inputVal, projectToCheck) {
    const titles = projectToCheck.map(task => task.title)
    if (titles.includes(inputVal)) {
        console.log('already did that')
        return true
    }
}
