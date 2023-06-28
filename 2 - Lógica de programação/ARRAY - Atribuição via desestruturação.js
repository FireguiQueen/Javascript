// Atribuição via desestruturação
/*
    A atribuição via desestruturação é uma sintaxe em JavaScript que permite extrair valores 
    de arrays ou objetos e atribuí-los a variáveis individuais de forma concisa. 
    Essa técnica é útil quando você deseja atribuir vários valores de uma vez ou quando 
    deseja extrair propriedades específicas de um objeto.
*/

// Atribuir novos valores a variáveis é algo bem simples
let pessoa = 'Gustavo'; 
pessoa = 'Maria'; 


// Mas e se tivermos diversas variáveis que precisam possuir novos valores?
let pessoa_01 = 'Flora';
let pessoa_02 = 'Guilherme';
let pessoa_03 = 'Maria';

// Criamos um array que possui todas as variáveis que dejamos atribuir um novo valor.
[pessoa_01, pessoa_02, pessoa_03] = ['Gustavo', 'Walter White', 'Jown Snow'];

// Veremos que todas as variáveis agora possuem novos valores
console.log(pessoa_01, pessoa_02, pessoa_03)