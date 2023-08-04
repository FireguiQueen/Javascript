function tasksToDo(){
    const tasks = [];

    const botoes = document.querySelectorAll('.btn')
    const [taskTyped, sendTask] = botoes;
    
    function addTask(task){
        const createLi = document.createElement('li');
        document.body.appendChild(createLi).innerText = task;
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