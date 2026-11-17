
let input = document.querySelector('input[type="text"]');
let btn = document.querySelector("#add-btn");
let list = document.querySelector("#todo-list");

btn.addEventListener("click", function () {

    let task = input.value.trim();

    if (task === "") {
        alert("Please Enter Any Task");
        return;
    }

    let li = document.createElement("li");

    // Checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");

    // Task Text
    let taskText = document.createElement("span");
    taskText.textContent = task;

    // Delete Button
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";

    // Line-through functionality
    checkBox.addEventListener("change", function () {

        if (checkBox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }

    });

    // Delete functionality
    dltBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(dltBtn);

    list.appendChild(li);

    input.value = "";

});
