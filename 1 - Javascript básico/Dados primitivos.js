//              Dados primitivos
/*  Dados primitivos são os tipos de dados mais básicos e fundamentais em uma linguagem de 
    programação. Esses tipos de dados são os blocos de construção essenciais para se trabalhar 
    com variáveis, expressões e algoritmos.

    Eles são importantes porque permitem que os programadores realizem cálculos e manipulem 
    dados de várias maneiras, formando a base para estruturas de dados mais complexas e tipos 
    de dados personalizados.
*/
// Em javascript, podemos usar a função "typeof" para ser o tipo de dado um valor.
console.log(typeof('oi'))



// Strings
/*
    A "string" é uma cadeia de caracteres.
    Veremos strings quando utilizamos aspas (" "), aspas simples (' ') e crase (` `).
*/
const frase = "Olá, isto é uma string!"
console.log(typeof frase)




// Number
/*
    O "number" são números que não são strings.
    No mundo real, podemos dizer que temos: números inteiros e quebrados.
    Mas no Javascript, isso não "importa", no final, independente do tipo do número, ele sempre será do tipo "Number".
    Estou ressaltando isto pois em outras linguagens, vemos que um número quebrado será de um tipo diferente de um número inteiro.
*/
const saldoConta = 45235
console.log(typeof saldoConta)




// Undefined
/*
    Como o próprio nome já nos diz, "undefined" é um valor que não foi definido.
    Podemos observar a aparição do "undefined" quando não definimos valores.
*/
let pessoa;
console.log(pessoa)
