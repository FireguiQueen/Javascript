// FOR IN 
/*
    Se você usar o loop for...in com uma string, ele irá iterar sobre cada caractere da string. 
    A cada iteração, ele atribui o valor do caractere à variável especificada e executa o bloco 
    de código.

    Se você usar o for...in em um objeto, ele irá iterar sobre as propriedades do objeto. 
    A cada iteração, ele atribui o nome da propriedade à variável especificada e executa o 
    bloco de código.

    Se você usar o for...in em um array, ele irá iterar sobre os índices do array. 
    A cada iteração, ele atribui o índice à variável especificada e executa o bloco de código.

    No exemplo abaixo, o for...in iterará sobre as propriedades do objeto "cachorro".
    A cada iteração, ele atribuirá o nome da propriedade à variável "informacoes"
    Portanto, na primeira iteração, informacoes terá o valor 'nome';
    Na segunda iteração, informacoes terá o valor 'sexo';
    Na terceira iteração, informacoes terá o valor 'raça'.
*/

const cachorro = {
    nome: 'Bolinha',
    sexo: 'Feminino',
    raça: 'Pinscher'
}

for(let informacoes in cachorro){
    console.log(cachorro[informacoes])
}



// SEGUNDO MÉTODO PARA ACESSAR VALORES DE PROPRIEDADES DE UM OBJETO.
/*
    Por padrão, nós temos o método "tradicional", onde colocamos um ponto final (.)
    e passamos o nome da propriedade que desejamos pegar o valor.
*/

// Ponto final
const pessoa = { name: 'Victoria' }
console.log(pessoa.name)

// Colchetes
const person = { name: 'Western '}
console.log(person['name'])



// POR QUE SABER TER O CONHECIMENTO SOBRE ESSAS DUAS MANEIRAS?
/*
    O método onde utilizamos ponto final pode não funcionar muito bem em nosso código
    quando fazemos uso do for...in, pois ao tentar acessar o valor de uma propriedade com uma 
    váriavel, é entendido que esta variável na verdade é uma propriedade.
*/
const passaro = {
    cor: 'azul',
    peso: '3kg'
}

for(let informacoes in passaro){
    // "passaro.informacoes" estamos tentando acessar o valor de cada propriedade do objeto.
    // mas o javascript entende que o objeto passaro possui a propriedade "informacoes"
    console.log(passaro.informacoes) //irá retornar undefined
}

for(let informacoes in passaro){
    // O colchetes funciona como uma temple string.
    // Aqui estamos colocando o valor real, e não o nome da variável em si.
    console.log(passaro[informacoes])
}




