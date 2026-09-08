const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");


/* Update Task Counter */

function updateTaskCount() {
    let count = taskList.children.length;

    if (count === 1) {
        taskCount.textContent = "1 task";
    } else {
        taskCount.textContent = count + " tasks";
    }

    if (count === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


/* Add Task */

addBtn.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task == "") {
        alert("Please enter a task.");
        return;
    }


    /* Create List Item */

    let li = document.createElement("li");


    /* Create Task Text */

    let span = document.createElement("span");

    span.className = "task-text";
    span.textContent = task;


    /* Create Actions Container */

    let actions = document.createElement("div");

    actions.className = "actions";


    /* Create Edit Button */

    let editBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";


    /* Create Delete Button */

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";


    /* Edit Task */

    editBtn.onclick = function () {

        let updatedTask = prompt(
            "Edit Task:",
            span.textContent
        );

        if (
            updatedTask !== null &&
            updatedTask.trim() !== ""
        ) {
            span.textContent = updatedTask.trim();
        }
    };


    /* Delete Task */

    deleteBtn.onclick = function () {

        li.remove();

        updateTaskCount();
    };


    /* Add Buttons to Actions */

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);


    /* Add Text and Actions to List Item */

    li.appendChild(span);
    li.appendChild(actions);


    /* Add List Item to Task List */

    taskList.appendChild(li);


    /* DOM Traversal Examples */

    console.log(taskList.children);
    console.log(li.parentElement);


    /* Update Counter */

    updateTaskCount();


    /* Clear Input */

    taskInput.value = "";

    taskInput.focus();
});


/* Allow Enter Key to Add Task */

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addBtn.click();
    }

});


/* Initial Task Count */

updateTaskCount();