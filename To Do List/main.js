// variable to refer list, input field and submit button
let ul = document.getElementById('taskList');
let taskDescr = document.getElementById('taskDescr');
let addTask = document.getElementById('addTask');

// event handler to submit task
addTask.addEventListener('click', createTask)

// function to submit task
function createTask(e) {
    e.preventDefault(); //prevents page from refreshing

    // creates items for the list
    let li = document.createElement('li')

    // creates a checkbox
    let checkBox = document.createElement("input");
    checkBox.className = "checkBox";
    checkBox.type = "checkBox";

    // creates a cross sign within a span
    let delTaskBtn = document.createElement("span")
    delTaskBtn.className = "delTask";
    let delSign = document.createTextNode("\u00D7");
    delTaskBtn.appendChild(delSign);

    // changes list items' text content to submitted input
    li.textContent = taskDescr.value;

    // append checkbox and cross button to every list item
    li.appendChild(checkBox);
    li.appendChild(delTaskBtn);

    // creates list item if input is not empty
    if (taskDescr.value === "") {
        alert("That is not very productive !");
    } else {
        ul.prepend(li);
    }

    // clears the input field upon submitting a list item
    taskDescr.value = '';

    // event handler to delete list item
    delTaskBtn.addEventListener('click', deleteTask)

    // event handler to mark list items as checked
    checkBox.addEventListener('change', checkTask)

}

// function to delete list item
function deleteTask() {
    let delTask = this.parentElement; //refers to the parent element of cross sign
    delTask.remove();
}

// function to mark list items as checked
function checkTask() {
    let boxStatus = document.getElementsByClassName('checkBox');
    let ckTask = this.parentElement; //refers to the parent element of checkbox

    // condition to switch list item appearance upon checkbox input
    do {
        ckTask.classList.toggle('checked')
        ul.appendChild(ckTask) //takes list item to bottom of the list
    } while (boxStatus.checked)
}








