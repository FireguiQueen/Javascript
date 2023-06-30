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

function sayWorkerInf(worker){
    const {name, gender, age, department, address, ...rest} = otavio;
    return `
    name: ${name}
    gender: ${gender}
    age: ${age}
    department: ${department}
    address: England - ${address.city}, ${address.postcode}, ${address.house}
    `
}

const flora = new worker('Flora Mijanha', 'female', 21, 'A424114J', 'Littleport', 'CB61PZ', 26, 'Back-end; Junior' )

console.log(sayWorkerInf(flora))