const API = "http://localhost:5000/api/tasks";

async function addTask(){

    const title =
    document.getElementById("title").value;

    const description =
    document.getElementById("description").value;

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            description
        })
    });

    loadTasks();
}

async function loadTasks(){

    const res = await fetch(API);

    const tasks = await res.json();

    let html = "";

    tasks.forEach(task=>{

        html += `
        <div class="task">

        <h3>${task.title}</h3>

        <p>${task.description}</p>

        <p>Status: ${task.status}</p>

        <button onclick="completeTask('${task._id}')">
        Complete
        </button>

        </div>
        `;
    });

    document.getElementById("tasks").innerHTML = html;
}

async function completeTask(id){

    await fetch(`${API}/${id}`,{
        method:"PUT"
    });

    loadTasks();
}

loadTasks();