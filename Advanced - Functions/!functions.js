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

    Sabemos que uma STR (string) pode ser: 
        - Atribuida à uma variável
        - Usada como argumento para uma função
        - O valor da propriedade de um objeto

    E pelo fato das funções serem "first class object", elas também podem fazer a mesma coisa
    que os outros tipos de dados fazem.
*/




//******************************************************************************* */

// DIFERENTES FORMAS DE SE DECLARAR UMA FUNÇÃO:



// DECLARATION
    /*  Colocamos a keyword "function" e a idêntificamos com um nome;
        Este nome seria justamente a "declaração", já que não é uma função anônima;
        > É único tipo declaração que ocorre o hoisting. */  
function sayHi(){
    console.log('hi')
}




// EXPRESSION
    // Criamos uma variável e atribuimos uma função a ela;
    // A function dentro desta variável pode ter um nome ou não;
const sayHiAgain = function(){
    return 'Hi';
} 
const sayHiPlease = function sayhi(){
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
console.log(sayHelloAgain('Guilherme'));





// IIFE (Immeadiatly Invoked Function Expression)
// Sintaxe
(function(){
    console.log('Olá!')
}) ();

/* É importante saber que os paretensis em Javascript possui várias finalidades, como por exemplo:
- Agrupar expressões, igual na matemática:  5 * (2+4)
- Criação de parâmetros e argumentos para funções
- Criação de IIFE.
- Entre outras.. 

Logo, já deve-se imaginar que é importante colocar ";" (que indica o fim de uma instrução).
Vemos no exemplo abaixo.:
*/
let numero = 8; // não foi colocado ";" aqui.
(function(){
    console.log('Olá')
}) (); 
/* Invocar esta função trará um erro. Pois foi entendido que os parentesis desta função
eram pra ser do '8'. */





// FACTORY 
/*
    Uma função factory nada mais é do que uma função que retorna um objeto.
    Esta é uma função extremamente útil quando você deseja criar diversos objetos com as mesmas
    propriedades, porém, com valores diferentes. 
*/

// Você concordaria comigo que ao criar uma função factory, seria uma ma pratica de programação
// ao colocar um método nela? 
// Pois agora se criamos 200 metodos diferentes, teremos 200 métodos idênticos, sendo que só seria necessário um.


const numeros = [223, 523, 522, 22]
const maiorQue100 = []

for(let numero of numeros){
    if(numero >= 100){
        maiorQue100.push(numero);
    } 
}
