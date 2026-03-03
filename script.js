const taskInput = document.getElementById('task-name-input');
const taskDescriptionInput = document.getElementById("task-description-input");
const tasksList = document.getElementById("tasks-list");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const noTasksText = document.querySelector("#tasks-list-container p");

let totalTasksOnList = 0;

function addTask(taskName, taskDescription, taskStartDate, taskEndDate) {

    const task = document.createElement("li");

    const mainLabel = document.createElement("p");
    mainLabel.innerHTML = `<span class="task-name">${taskName}</span> | <span class="task-desc">${taskDescription}</span>`;

    const dateLabel = document.createElement("p");

    let dateText;
    const today = new Date();
    
    if (!taskStartDate && !taskEndDate) {
        dateText = "Today";
    }
    else if (
        taskStartDate &&
        taskEndDate &&
        taskStartDate === taskEndDate &&
        taskStartDate === today
    ){
        dateText = "Today";
    }
    else {
        dateText = `(${taskStartDate}${taskEndDate ? " - " + taskEndDate : ""})`;
    }

    dateLabel.textContent = dateText;

    task.appendChild(mainLabel);
    task.appendChild(dateLabel);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        tasksList.removeChild(task);
        totalTasksOnList--;
        if (totalTasksOnList === 0) {
            noTasksText.style.display = "block";
        }
    });

    task.appendChild(deleteBtn);

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

    if (!taskName.trim() || !taskDescription.trim()) {
        alert("Task name and description cannot be empty.");
        return;
    }

    if (!taskStartDate || !taskEndDate) {
        alert("Please enter both a start date and an end date.");
        return;
    }

    if(taskStartDate > taskEndDate) {
        alert("Start date cannot be later than end date.");
        return;
    }

    addTask(taskName, taskDescription, taskStartDate, taskEndDate);
});