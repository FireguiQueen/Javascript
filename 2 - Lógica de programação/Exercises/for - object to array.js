// Contrua um objeto e pegue todas suas propriedades e jogue para um array. 

const pessoa = { 
    nome: 'Flora', 
    age: 19, 
}

function arrayToOB(obj){
    const keysInArray = [];
    for(let inf in obj){
        keysInArray.push('oi' + 'oi')
    }    

    return keysInArray
}
