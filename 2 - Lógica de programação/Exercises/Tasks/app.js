function tasksToDo(){

    const botoes = document.querySelectorAll('.btn')
    const [taskTyped, sendTask] = botoes;
    
    const deleteTask = document.createElement('button');
    
    function addTask(task){
        const createLi = document.createElement('li');
        document.querySelector('.task-list').appendChild(createLi).innerText = task;
        taskTyped.value = '';
        taskTyped.focus()
    }
    
    taskTyped.addEventListener('keypress', function(e){
        const task = e.target
        if(!taskTyped.value) return;      
        if(e.keyCode === 13) addTask(task.value);
    })

    document.addEventListener('click', function(e){
        const whichBtn = e.target;
        if(!taskTyped.value) return;      

        if(whichBtn === sendTask) addTask(taskTyped.value);
        
    })

} tasksToDo()