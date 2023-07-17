// FOR...IN 
/*
    O for..in serve para nós iteramos sobre cada propriedade enumerável.
    Ao definirmos uma variável em nosso laço de repetição for...in, esta mesma variável
    será relacionada as propriedades enumáriaveis.

    No caso de arrays, as "propriedades enumeráveis" são os índices. 
    Por isso, ao utilizar o for..in em um array, sempre nos retornará números. 

    Em objetos, as "propriedades enumeráveis" são justamente as propriedades do objeto.
    Logo, ao usar o for..in em objetos, sempre será retornado os nomes das propriedades.
    
    --> Em resumo, o for...in trabalha com índices cada tipo de dado. O indice 0 numa string
    seria o primeiro caractere. O indice 0 num objeto seria a primeira 'key' deste objeto. E num
    array, o indice 0 seria o primeiro elemento.

    No exemplo abaixo, o for...in iterará sobre as propriedades do objeto "cachorro".
    Na primeira vez que o for..in for executado, ele irá pegar a primeira propriedade do objeto,
    e irá atribuir ela a variável "informações". Em seguida, ele será inicializado novamente,
    mas desta vez usando a segunda propriedade do objeto "cachorros".. Ele irá pegar este propriedade
    e atribuir ela a variável "informações." 
*/

const cachorro = {
    nome: 'Bolinha',
    sexo: 'Feminino',
    raça: 'Pinscher' } 

for(let informacoes in cachorro){
    console.log(cachorro[informacoes])
}



// ACESSANDO VALORES DAS PROPRIEDADES DE UM OBJETO

// Ponto final
const pessoa = { name: 'Victoria' }
console.log(pessoa.name)

// Colchetes
const person = { name: 'Western '}
console.log(person['name'])


// POR QUE SABER TER O CONHECIMENTO SOBRE ESSAS DUAS MANEIRAS?
/*
    O método onde utilizamos ponto final pode não funcionar muito bem em nosso código
    quando fazemos uso do for...in. Ao tentar acessar o valor de uma propriedade com uma 
    váriavel, é entendido que esta variável, na verdade, é uma propriedade.
*/
const passaro = {
    cor: 'azul',
    peso: '3kg'
}

for(let informacoes in passaro){
    // javascript entende que o objeto passaro possui a propriedade "informacoes"
    console.log(passaro.informacoes) // irá retornar undefined
}

for(let informacoes in passaro){
    // O colchetes armazena a variável informações, e esta variável possui como valor um nome de uma propriedade
    console.log(passaro[informacoes])
}



// ****************************************************************



// FOR...OF


