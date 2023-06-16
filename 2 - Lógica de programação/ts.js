let data_com_ano_alterado = new Date('2023-06-06 22:32:21');

// Ou assim (sem o espaço entre o ano e a data, usando o caractere 'T').
// let data_com_ano_alterado = new Date('2023-06-06T22:32:21');

console.log(data_com_ano_alterado);

function checkNumber(numero){
    const test = numero >= 1;

    switch(numero){
        case test: 
            return 'Seu número é maior ou igual a um.'
            break;
    
        default:
            return 'Seu número é menor do que um.'
    }
}
console.log(checkNumber(2))