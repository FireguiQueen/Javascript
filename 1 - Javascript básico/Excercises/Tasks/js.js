const tasks = [];
function addNewTask(){
    tasks.push(newTask.value)
    newTask.value = ''
}

document.addEventListener('click', function(e){
    const btns = document.querySelectorAll('.btn');
    const [newTask, addTask] = btns;

    const elementoCapturado = e.target; 
    switch(elementoCapturado){
        case addTask:
            addNewTask();
            break;

    }

    const listTask = document.createElement('li');
    for(let task of tasks){
        document.body.appendChild(listTask);
        listTask.innerText = task
    }
})