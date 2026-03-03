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

    const mainLabel = document.createElement("p");
    mainLabel.textContent = `${index} ${taskName} | ${taskDescription}`;
    index++;

    const dateLabel = document.createElement("p");
    dateLabel.textContent = `(${taskStartDate}${taskEndDate ? " - " + taskEndDate : ""})`;

    task.appendChild(mainLabel);
    task.appendChild(dateLabel);

    tasksList.appendChild(task);

    totalTasksOnList++;

    if (totalTasksOnList > 0) {
        noTasksText.style.display = "none";
    }

    taskInput.value = "";
    taskDescriptionInput.value = "";
    startDate.value = "";
    endDate.value = "";
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