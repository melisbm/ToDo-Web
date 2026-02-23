const taskInput = document.getElementById('task-name-input');
const tasksList = document.getElementById("tasks-list");
const noTasksText = document.querySelector("#tasks-list-container p");

let totalTasksOnList = 0;

function addTask(taskName) {

    const task = document.createElement("li");

    const taskLabel = document.createElement("p");
    taskLabel.textContent = taskName;

    task.appendChild(taskLabel);
    tasksList.appendChild(task);

    totalTasksOnList++;

    if (totalTasksOnList > 0) {
        noTasksText.style.display = "none";
    }

    taskInput.value = "";
}

document.querySelector('form').addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value;
    addTask(taskName);
});