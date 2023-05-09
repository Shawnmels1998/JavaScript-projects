const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

btn.addEventListener("click", addTask);

function addTask() {
    const task = input.value.trim();
    if (task !== "") {
        addTaskToLS(task);
    } else {
        alert("Please enter a task!");
    }
}

function addTaskToLS(task) {
    // Get existing tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    tasks.push(task);

    // Store the updated tasks back in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
