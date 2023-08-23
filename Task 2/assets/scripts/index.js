function addTask() {
    let newTaskId = localStorage.length;
    let newTaskValue = document.querySelector(`.newTask`).value;
    let newTask = JSON.stringify({taskName: newTaskValue, isCompleted: false})
    localStorage.setItem(newTaskId, newTask);
    Swal.fire({
        icon: 'success',
        title: 'Added a task',
        confirmButtonText: 'Okay'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload(); 
        }
    })
}

function completeTask() {
    let currentTask = JSON.parse(localStorage.getItem(event.target.id));
    /* Set the task as incomplete */
    if(currentTask.isCompleted == false) {
        let updatedTask = JSON.stringify({taskName: currentTask.taskName, isCompleted: true})
        localStorage.setItem(event.target.id, updatedTask)

        Swal.fire({
            icon: 'success',
            title: 'Completed a task',
            confirmButtonText: 'Okay'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); 
            }
        })
    }
    /* Set the task as complete */
    else {
        let updatedTask = JSON.stringify({taskName: currentTask.taskName, isCompleted: false})
        localStorage.setItem(event.target.id, updatedTask)
        Swal.fire({
            icon: 'info',
            title: 'Marked the task incomplete',
            confirmButtonText: 'Okay'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); 
            }
        })
    }
}

function deleteTask() {
    let taskId = parseInt(event.target.id);
    Swal.fire({
        title: 'Do you really want to delete the task?',
        showConfirmButton: false,
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: `Confirm`,
    }).then((result) => {
        if (result.isDenied) {
            localStorage.removeItem(taskId); 
            location.reload()
        }
    })
}

function displayTask(id, title, isCompleted) {
    let taskDiv = document.createElement('div');
    
    let taskTitle = document.createElement('h1');
    taskTitle.textContent = title;

    let taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute(`type`, `checkbox`)

    taskCheckbox.setAttribute(`id`, id);
    taskCheckbox.addEventListener(`change`, completeTask);

    let taskDelete = document.createElement('button');
    taskDelete.textContent = `Delete`;
    taskDelete.addEventListener(`click`, deleteTask);
    taskDelete.setAttribute(`id`, id);


    /* Apply the conditional Styling */
    if(isCompleted == true) {
        taskDiv.setAttribute(`class`, `task completed`);
        taskCheckbox.checked = true;
    }
    else {
        taskDiv.setAttribute(`class`, `task`);
        taskCheckbox.checked = false;
    }
    
    /* Append all elements */
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDelete);
    document.querySelector(`.task_list`).appendChild(taskDiv)
}

/* Iterate through local storage items */
for(let i = localStorage.length - 1 ; i >= 0 ; i--) {
    let taskName = JSON.parse(localStorage.getItem(i)).taskName;
    let isCompleted= JSON.parse(localStorage.getItem(i)).isCompleted;
    displayTask(i, taskName, isCompleted)
}