// FOR IN 
/*
    "For in" irá sempre nos retornar números. 
    Por exemplo, caso você utilize do For in em uma string, ele irá retornar a quantidade
    de caracteres que esta string possui.
    Se você utilizar o For in em um objeto, ele irá retornar a quantidade de propriedades 
    que o mesmo possui.
    E se for um array, ele irá retornar a quantidade de elementos que este array possui.

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




