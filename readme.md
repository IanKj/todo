add button has event listener
    adds to current project
    current project is set by select 
        checks selected Project
            loop over projects for same name
                task get's added to project

project array
    keeps track of seperate projects
    each project is an object
        title: string
        tasks: array of objects
            each object is a specific task with details
                title, dueDate, completed...etc
            

select menu event listener 
    user picks new category 
        todo list refreshes - only altering DOM here, not localStorage
        (remove current LIs
        loop function runs)
            displays newly selected projects tasks
                each task is an LI
