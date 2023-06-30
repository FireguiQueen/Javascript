// Crie um objeto relacionado a um funcionário, o mesmo deve possuir muitas informações. 
// Crie uma função que o capture e devolve os valores das propriedades de maneira "mastigada".

function worker(name, gender, age, NIN, city, postcode, house, department, workerId){
    return{
        name,
        gender,
        age,
        NIN,
        address: {
            city,
            postcode,
            house
        },
        department,
        workerId
    }
}

const worker = {
    name: 'Adam Doe Lemster',
    gender: 'male',
    age: 36,
    NIN: 'AB123456C',

    address: {
        city: 'Ely',
        postcode: 'CB61SA',
        house: 42
    },

    derpartment: 'Marketing / design',
    workerId(){
        const date = new Date();
        const year = date.getFullYear();
        return typeof worker.age
    },
}
function aboutWorker(worker){
    const list = [];
    const {name, gender, age, NIN, address, derpartment, workerId} = worker;
    return `
        ${name}
        ${gender}
        ${age} 
        ${NIN}
        ${address}
        ${derpartment}
        ${workerId()}
    `
} 
console.log(aboutWorker(worker))