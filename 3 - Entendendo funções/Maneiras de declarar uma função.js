// DECLARATION
// Colocamos a keyword "function" e a idêntificamos com um nome;
// E este nome seria justamente a "declaração", já que não é uma função anônima;
// Unico tipo declaração que ocorre o hoisting.  
function sayHi(){
    console.log('hi')
}


// EXPRESSION
// Criamos uma variável e atribuimos a ela uma função;
// Se chama "expression" pois a variável colocada está expressando uma função anônima
// Funções anônimas são aquelas que não possuem nomes -> function(){}
const sayHiAgain = function(){
    return 'Hi';
} 



// ARROW
// Criamos uma "function expression" e seguimos uma ordem de: 1. parâmetros; 2. corpo da função
// Quando não há parâmetros, os parentesis são obrigatórios.
const sayHello = () => {
    return 'Hello'
}

// Quando há somente um parâmetro, não há necessidade de parentesis.
// E quando há somente uma linha de código, não há necessidade das chaves {} nem do return.
const sayHelloAgain = person => `Olá ${person}`
console.log(sayHelloAgain('Guilherme'))