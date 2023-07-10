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

    Colocaremos o tipo de variável que iremos trabalhar, e após isto, iremos colocar
    onde desajamos iterar.
    Se for em um objeto por exemplo, o for será executado pela primeira vez, e irá atruibir
    a variável "informações" a propriedade 0 (nome), e enquanto o objeto possuir propriedades,
    ele fará isto.
*/

const cachorro = {
    nome: 'Bolinha',
    sexo: 'Feminino',
    raça: 'Pinscher'
}
// "Cachorro" é um objeto, logo, ao colocar "in cachorro" o Javascript entende que desejamos
// saber a quantidade de propriedades DENTRO do objeto. 
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
*/




