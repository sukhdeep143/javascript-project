document.addEventListener("DOMContentLoaded", ()=>{
    const input_text = document.getElementById("input_text");
const add_task_button = document.getElementById("add_task");
const todo_list = document.getElementById("todo_items");

let tasks = JSON.parse(localStorage.getItem("tasks")) ||[];

tasks.forEach(task => renderTask(task))

add_task_button.addEventListener('click', ()=>{
    const task_value = input_text.value.trim();
    if(task_value === "") return;

    const newTask = {
        id: Date.now(),
        text: task_value,
        completed: false
    }

    tasks.push(newTask);
    saveTask();
    input_text.value = "";
    console.log(tasks);
    

});

function renderTask(task){
   
    const li = document.createElement("li");
    li.setAttribute("data_id", task.id);
    if(task.completed) li.classList.add("completed");
    li.addEventListener("click", ()=>{
        task.completed = !task.completed;
        saveTask();
        li.classList.toggle("completed");
    }); 
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    todo_list.appendChild(li);


    
}

function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function removeTask{
    
}

});

