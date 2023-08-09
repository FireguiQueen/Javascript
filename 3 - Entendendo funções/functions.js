// First Class Object
/*
    Em javascript e em diversas outras linguages, as funções são entidades "first class object",
    traduzindo para o português, "objetos de primeira classe".
    Isto significa que, funções podem receber diversos outros tratamentos que outros tipos de dados recebem.
        Por exemplo:
            Você pode atribuir uma função a uma variável, como você faria com um número 
            ou uma string.

            Podem ser passadas como argumentos: 
            Você pode passar uma função como um argumento para outra função. 
            Isso é especialmente útil para funções de ordem superior (higher-order functions) que operam em outras funções.

            Podem ser retornadas por outras funções: 
            Uma função pode retornar outra função como seu resultado.

            Podem ser armazenadas em estruturas de dados: 
            Você pode armazenar funções em arrays, objetos e outras estruturas de dados.

            Podem ser criadas dinamicamente: 
            Você pode criar funções dinamicamente durante a execução do programa, o que permite uma flexibilidade adicional.

    Resumidamente, 
*/


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



