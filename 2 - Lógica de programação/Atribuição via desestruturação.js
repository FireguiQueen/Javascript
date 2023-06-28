//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*
    A atribuição via desestruturação é uma sintaxe em JavaScript que permite extrair valores 
    de arrays ou objetos e atribuí-los a variáveis individuais de forma concisa. 
    Isto é útil quando você deseja atribuir vários valores de uma vez ou quando deseja extrair 
    propriedades específicas de um objeto.
*/


// Atribuir novos valores a variáveis é algo bem simples
let pessoa = 'João'; 
pessoa = 'Maria'; 

// Mas e se tivermos diversas variáveis que precisam possuir novos valores?
let pessoa_01 = 'Flora';
let pessoa_02 = 'Otavio';
let pessoa_03 = 'Maria';


/* 
    No lado esquerdo, temos o array que armazena as variáveis que iremos alterar. 
    No lado direito, temos array que contém os valores que serão alocados nas variáveis.
    É importante notar que a ordem das variáveis deve corresponder à ordem dos valores no array
*/
[pessoa_01, pessoa_02, pessoa_03] = ['Chloe', 'Walter White', 'Jon Snow'];

// Veremos que todas as variáveis agora possuem novos valores
console.log(pessoa_01, pessoa_02, pessoa_03)