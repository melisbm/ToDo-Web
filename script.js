const taskInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById("task-description-input");
const tasksList = document.getElementById("tasks-list");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const noTasksText = document.querySelector("#tasks-list-container p");

let totalTasksOnList = 0;
let index = 1;

function addTask(taskName, taskDescription, taskStartDate, taskEndDate) {

    const task = document.createElement("li");

    const taskLabel = document.createElement("p");
    const indexLabel = document.createElement("p");
    indexLabel.textContent = index++;
    taskLabel.textContent = taskName;

    const taskDescriptionLabel = document.createElement("p");
    const itemFront = document.createElement("div");
    taskDescriptionLabel.textContent = taskDescription;

    const dateContainer = document.createElement("div");
    const dateLabel = document.createElement("p");
    dateLabel.textContent = "Start: " + taskStartDate + " End: " + taskEndDate;

    dateContainer.appendChild(dateLabel);

    itemFront.appendChild(indexLabel);
    itemFront.appendChild(taskLabel);

    task.appendChild(itemFront);
    task.appendChild(taskDescriptionLabel);
    task.appendChild(dateContainer)

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

    const taskStartDate = startDate.value;
    const taskEndDate = endDate.value;
    console.log(taskStartDate);

    addTask(taskName, taskDescription, taskStartDate, taskEndDate);
});