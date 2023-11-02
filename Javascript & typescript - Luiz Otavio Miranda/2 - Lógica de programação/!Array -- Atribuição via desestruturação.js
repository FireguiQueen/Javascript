//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*
    A atribuição via desestruturação é uma sintaxe em JavaScript que permite extrair valores 
    de arrays ou objetos e atribuí-los a variáveis individuais de forma concisa. 
    Isto é útil quando você deseja atribuir vários valores de uma vez ou quando deseja extrair 
    propriedades específicas de um objeto.
*/

// NÃO CONFUNDA REATRIBUIÇÃO DE VALORES COM ATRIBUIÇÂO VIA DESESTRUTURAÇÂO

// Reatribuir valores para uma variável é algo bem simples
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
console.log(pessoa_01, pessoa_02, pessoa_03);




// Podemos fazer a mesma coisa com os elementos de um array.
// Estamos pegando os elementos e atribuindo uma VARIÁVEL diferente a cada um eles.
const lista_nomes = ['Otavio', 'Paulo', 'Osvaldo'];
const [pessoa_1, pessoa_2, pessoa_3] = lista_nomes


// Não é obrigatório criar variáveis a todos os valores de um array.
const [pessoa1] = lista_nomes;
console.log(pessoa1)


/*
    Caso você queira pegar o resto, basta colocar o operador "rest" (...)
    Este operador irá criar uma variável que possui um array, e este array irá possuir 
    todos os valores que não tiveram uma variável atribuida a eles. Por exemplo.:
*/
const nomes = ['Julio', 'Érik', 'Paula', 'Mario', 'Leonardo'];
let [nome_1, nome_2, ...nomesRestantes] = nomes;

console.log(nome_1) // Julio
console.log(nome_2) // Érik
console.log(nomesRestantes) // ['Paula', 'Mario', 'Leonardo'];
