const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskTotal = document.getElementById("total");
const taskList = document.getElementById("task-list");

/*Tasks Total Number*/
let total = 0;

function updateCount() {
    taskTotal.textContent = total;
}

function addTask(){
    // no spaces will be add
    const taskText = taskInput.value.trim();
    if(taskText ===""){
        return;
    }

    //add new task
    const li = document.createElement("li");
    li.textContent = taskText;

    //create a delete task button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="Delete";

    //mark completed task
    function completeTask(){
        li.classList.toggle("completed");
    }
    li.addEventListener("click",completeTask)/*no () in completeTask becuase we passes the function not call it */

    //acviate delete task button
    function deleteTask(event) {
        li.remove();
        total--;
        updateCount();
    }

    deleteBtn.addEventListener("click", deleteTask);

    //add delete button for each task in the list
    li.appendChild(deleteBtn);

    //add teh task tot eh exsiting list
    taskList.appendChild(li);

    //update the totel
    total++;
    updateCount();

    //clear the text place
    taskInput.value="";
}

    //activate add task button
    addButton.addEventListener("click" , addTask);

    //activate the enter as a add task button
    function handleEnter(event){
        if(event.key === "Enter"){
            addTask();
        }
    }

    taskInput.addEventListener("keydown", handleEnter);

