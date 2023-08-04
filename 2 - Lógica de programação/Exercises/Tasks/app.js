function tasksToDo(){

    const botoes = document.querySelectorAll('.btn')
    const [taskTyped, sendTask] = botoes;
    
    
    function addTask(task){
        const createLi = document.createElement('li');
        document.querySelector('.task-list').appendChild(createLi).innerText = `${task} `;
        createDeleteButton(createLi);
        taskTyped.value = '';
        taskTyped.focus()
    }

    let deleteButton;
    function createDeleteButton(father){
        const createButton = document.createElement('button')
        createButton.setAttribute('class', 'delete');
        deleteButton = father.appendChild(createButton).innerText = 'Delete'
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

    deleteButton.addEventListener('click', function(e){
        const eTarget = e.target;
        eTarget.parentElement.remove()
    })

} tasksToDo()