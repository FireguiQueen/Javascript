// Utilize callbacks para determinar operações matemáticas usando X e Y. 
(function(){
    function sum(x,y){
        return x + y;
    }
    function multiply(x,y){
        return x * y
    }
    function subtract(x,y){
        return x - y;
    }
    function devide(x, y){
        return x / y;
    }
    function mathOperation(x,y, operacao){
        console.log(operacao(x, y))
    }
    
    mathOperation(562, 12, devide)
}) ();



// 1. Crie um array chamado "taskList" contendo várias tarefas (strings).
// 2. Defina uma função chamada "logTask" que recebe uma tarefa como argumento e imprime "Tarefa: <tarefa>".
// 3. Defina uma função chamada "processTasks" que recebe uma lista de tarefas e uma função de callback.
//    Esta função deve executar o callback para cada tarefa na lista.

// Teste chamando a função "processTasks" com a lista de tarefas e a função "logTask" como callback.
(function(){
    const taskList = ['Wake up, make the bed, brush teeth and take a shower', 'Go to School', 'Practice music', 'Lunch and gym', 'Work', 'Study']
    function logTask(tarefa){
        console.log(`${(taskList.indexOf(tarefa)) + 1} ${tarefa}`)
    }
    
    function processTasks(tasks, printTask){
        console.log('~ Tarefas')
        for(let i of tasks){
            printTask(i)
        }
    }
    processTasks(taskList, logTask)
}) ();


// 1. Crie uma função que retorna um objeto com as propriedades: name, age e profession.
// 2. Crie um array onde armazena o retorno desta função.
// 3. Utilize do callback para poder acessar informações de cada
//    pessoa, além de outras funcionalidades.
function buildWorkerProperties(name, age, profession){
    return {
        name,
        age,
        profession
    }
}
const workers = [
    buildWorkerProperties('Paulo', 22, 'Fireman'),
    buildWorkerProperties('Julia', 21, 'Fireman'),
    buildWorkerProperties('Edgar', 19, 'Fireman'),
    buildWorkerProperties('Maria', 25, 'Fireman'),
]

function showInformations(obj){
    for(let i in obj){
        console.log(obj[i]);
    }
}

function calcAge(obj){
    const data = new Date();
    const year = data.getFullYear()
    console.log(`Nascido em ${year - obj.age}`)
}


function processPerson(callback, obj){
    callback(obj)
}

for(let i of workers){
    processPerson(showInformations, i)
}
