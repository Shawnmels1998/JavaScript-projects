const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

function addTask(e) {
    e.preventDefault();

    const task = input.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const newLi = document.createElement("li");
    newLi.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    delBtn.addEventListener("click", function() {
        const del = confirm("Are you sure you want to delete this task?");
        if (del) {
            this.parentNode.remove();
        }
    });
    newLi.appendChild(delBtn);

    todoList.appendChild(newLi);
    input.value = "";
}

function clearTasks() {
    todoList.innerHTML = "";
}

btn.addEventListener("click", addTask);
clear.addEventListener("click", clearTasks);
