let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);
  });
}

button.addEventListener("click", function () {
  tasks.push(input.value);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();

  input.value = "";
});

displayTasks();
