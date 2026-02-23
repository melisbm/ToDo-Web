const taskInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById("task-description-input");
const tasksList = document.getElementById("tasks-list");
const noTasksText = document.querySelector("#tasks-list-container p");

let totalTasksOnList = 0;
let index = 1;

function addTask(taskName, taskDescription) {

    const task = document.createElement("li");

    const taskLabel = document.createElement("p");
    const indexLabel = document.createElement("p");
    indexLabel.textContent = index++;
    taskLabel.textContent = taskName;

    const taskDescriptionLabel = document.createElement("p");
    const itemFront = document.createElement("div");
    const divider = document.createElement("vr");
    taskDescriptionLabel.textContent = taskDescription;

    itemFront.appendChild(indexLabel);
    itemFront.appendChild(taskLabel);
    itemFront.appendChild(divider);

    task.appendChild(itemFront);
    task.appendChild(taskDescriptionLabel);

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
    const taskDescription = taskDescriptionInput.value;
    addTask(taskName, taskDescription);
});