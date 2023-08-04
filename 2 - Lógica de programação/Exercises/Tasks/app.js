function tasksToDo(){
    const tasks = [];

    const botoes = document.querySelectorAll('.btn')
    const [taskTyped, sendTask] = botoes;
    
    const createLi = document.createElement('li');
    const deleteTask = document.createElement('button');
    
    function addTask(task){
        document.querySelector('.task-list').appendChild(createLi).innerText = task;

        taskTyped.value = '';

        tasks.push({
            keyword: task, 

        }); console.log(tasks)
    }

    document.addEventListener('click', function(e){
        const whichBtn = e.target;
        if(!taskTyped.value) return;      

        if(whichBtn === sendTask){
            addTask(taskTyped.value);
        }
    })

} tasksToDo()