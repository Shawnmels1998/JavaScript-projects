const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

btn.addEventListener("click", addTask);

function addTask() {
    if(input.value !== "") {
        addTaskToLS();
    } else {
        alert("please enter a task");
    }
}


// save task to to local storage
function addTaskToLS() {
    
}