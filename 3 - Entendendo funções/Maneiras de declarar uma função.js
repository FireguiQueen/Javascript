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
const saiHi = function(){
    console.log('hi')
}


// ARROW
// Criamos uma "function expression" e colocamos 