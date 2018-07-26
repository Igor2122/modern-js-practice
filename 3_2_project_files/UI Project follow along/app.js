// Define UI variables 

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');




// Load all event listeners 

loadEventListeners();


// load event listeners 
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event 
    form.addEventListener('submit', addTask)
    // remove task event 
    taskList.addEventListener('click', removeTask);
    // claer all tasks 
    clearBtn.addEventListener('click', removeAllTasks);
    // filter through the tasks event 
    filter.addEventListener('keyup', filterTasks);


}

// Get Tasks from ls 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        // create list element 
        const li = document.createElement('li');
        // add a class to the li created
        li.className = 'collection-item';
        // Create a text node and appned to the li
        li.appendChild(document.createTextNode(task));
        // Create a new link element --- delete x on the right of the element 
        const link = document.createElement('a');
        // Add a class so it appears as an x
        link.className = 'delete-item secondary-content';
        // Add icon html 
        link.innerHTML = '<i class="fa fa-remove">X</i>';
        // Append the link to the list intem
        li.appendChild(link);
        // Add hover pointer
        link.setAttribute('style', 'cursor: pointer;');

        // After allt the above to append the li to ul 
        taskList.appendChild(li);
    });


}

// Add Task

function addTask(e) {
    e.preventDefault();
    // check if there is a value
    if (taskInput.value === '') {
        taskInput.classList = 'bg-danger';
        alert('Plese input the task');
    }
    else {
        // create list element 
        const li = document.createElement('li');
        // add a class to the li created
        li.className = 'collection-item';
        // Create a text node and appned to the li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create a new link element --- delete x on the right of the element 
        const link = document.createElement('a');
        // Add a class so it appears as an x
        link.className = 'delete-item secondary-content';
        // Add icon html 
        link.innerHTML = '<i class="fa fa-remove">X</i>';
        // Append the link to the list intem
        li.appendChild(link);
        // Add hover pointer
        link.setAttribute('style', 'cursor: pointer;');

        // After allt the above to append the li to ul 
        taskList.appendChild(li);

        // Store in Local Storate 
        storeTaskInLocalStorage(taskInput.value);


        // Clear the input 
        taskInput.value = '';
    }


}



// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task function 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure ?')) { // confirm is promting are u sure message 
            // Removed from the DOM 
            e.target.parentElement.parentElement.remove();
            // Remove from Local Storage 
            removeTaskFromLocalStorageFull(e.target.parentElement.parentElement);
        }
    }
}


// Remove from Local Storage  
function removeTaskFromLocalStorageFull(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            task.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove all tasks
function removeAllTasks(e) {
    // e.preventDefault();
    // console.log(e.target);
    if (e.target.classList.contains('clear-tasks')) {
        if (confirm('Are you sure ?')) {
            // slower & not reccomended way 
            // taskList.innerHTML = '';
            // Option 1
            // while (taskList.hasChildNodes()) {
            //     taskList.removeChild(taskList.lastChild);
            // }
            // Option 2 
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
        }
    }
    // Clear from Local Storage 
    clearTasksFromLocalStorage();
}

// Clear Tasks from local storage 
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase(); // will give us value of what was typed in 
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task) { // returns node list from qurSAll so we can loop with forEach
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.setAttribute('style', 'display:block;background:#90ee90;')
        }
        else {
            task.style.display = 'none';
        }
    });
}




// let cnt;

// const counter = {
//     cnt: 0,

//     inc: function () {
//         cnt++;
//         console.log(cnt);
//     }
// };

// clearBtn.addEventListener('click', counter.inc(), false);
