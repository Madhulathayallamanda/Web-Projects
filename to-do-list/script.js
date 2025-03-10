$(document).ready(function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function displayTasks() {
        $("#tasks").empty();
        tasks.forEach((task, index) => {
            let statusClass = task.done ? "done" : "";
            $("#tasks").append(`
                <li class="list-group-item">
                    <input type="checkbox" data-index="${index}" ${task.done ? "checked" : ""}>
                    <span class="${statusClass}">${task.text}</span>
                    <button class="btn btn-danger delete-task" data-index="${index}">Delete</button>
                </li>
            `);
        });
    }

    displayTasks();

    $("#add-task").submit(function(e) {
        e.preventDefault();
        let task = $("#task").val();
        if (task) {
            tasks.push({ text: task, done: false });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
            $("#task").val("");
        }
    });

    $(document).on("click", ".delete-task", function() {
        let index = $(this).data("index");
        $("#deleteModal").modal("show");
        $("#delete-task").data("index", index);
    });

    $("#delete-task").click(function() {
        let index = $(this).data("index");
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        $("#deleteModal").modal("hide");
    });

    $(document).on("click", "input[type='checkbox']", function() {
        let index = $(this).data("index");
        tasks[index].done = $(this).prop("checked");
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
    });
});
