let data_com_ano_alterado = new Date('2023-06-06 22:32:21');

// Ou assim (sem o espaço entre o ano e a data, usando o caractere 'T').
// let data_com_ano_alterado = new Date('2023-06-06T22:32:21');

console.log(data_com_ano_alterado);

const pessoa = 'j';
switch(pessoa){
    case 'Maria':
        console.log('Seu nome é Maria, e rima com coringa!');
        break;

    case 'joao':
        console.log('Seu nome é João, e rima com anão!');
        break;

    default:
        console.log('Nenhum nome foi digitado ou o nome passado não possui informaões');
}


data_com_ano_alterado = new Date('2023-06-06T22:32:21');

console.log(data_com_ano_alterado);


/// 
console.log('-------------')
const teste = new Date().toLocaleDateString('pt-BR', {dateStyle: "full"})
console.log(teste)




{
    var veiculo = 'Caminhão';
}
console.log(veiculo)


{   // ESCOPO LOCAL
    let pessoa5 = 'Julião';
}
console.log(pessoa5) // NENHUMA VARIÁVEL FOI DEFINIDA