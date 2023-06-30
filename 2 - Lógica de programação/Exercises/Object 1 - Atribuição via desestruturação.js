// Crie um objeto relacionado a um funcionário, o mesmo deve possuir muitas informações. 
// Crie uma função que o capture e devolve os valores das propriedades de maneira "mastigada".

function calcId(age, NIN){
    const year = new Date().getFullYear()
    return `${year - age}.${NIN}`
}

function worker(name, gender, age, NIN, city, postcode, house, department){
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
        workerId: calcId(age, NIN)
    }
}
const otavio = new worker(
    'Adam Doe Lemster', 'male', 36, 'AB123456C', 'Ely', 'CB61SA', 42, 'Marketing / design'
)

function sayWorkerInf(worker){

}
const {name, gender, age} = otavio;



