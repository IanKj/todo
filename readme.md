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

remove list items
    x span has event listener
        removes attached LI from DOM and from current project tasks
            use checkSelectedProject to find current project
                match projects tasks Ids with id of clicked LI
            
switch project selection list to custom li
    loop through project array
    li inner text = project's title
    add event listener 
        rela

need to implement {
    remove project
    //space the li out
    make it look good
    add basic validation
        //no duplicates
        add css for when a duplicate entry is made
        //no empty
        //max characters
    //convert select option list into a custom select field
    add local storage
    
}