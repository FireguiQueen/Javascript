// ESCOPO LÉXICO
/*
    Um escopo léxico, também conhecido como escopo estático, refere-se à maneira como as 
    variáveis são acessadas e atribuídas em um programa de computador, com base na estrutura 
    de aninhamento de blocos de código.    
*/  


//  Observamos que há uma variável que recebe "oi" como valor.
//  E dentro de uma função, podemos chamar esta variável. 
const palavra = "oi"
function digaOi(){
    console.log('oi')
}

// Pense numa hierarquia, onde o filho pode gastar o dinheiro do pai, mas o pai não pode gastar o dinheiro do filho
// A função "greetings" seria o pai, a função "sayGreetings" a filha, e isto permite a função
// filha fazer uso da variável criada pela função pai, mas a função pai não pode fazer uso da variável
// da função filha
function greetings(){
    const saudacoes = "Olá!"
    function sayGreetings(){
        console.log(saudacoes)
    }
}

/* Neste exemplo podemos ver que a função "dizerNome" printa no nosso console a variável 'nome'.
Mas esta variável existe nos dois contextos, na função filha e na função pai.
O resultado será "Pablo", pois primeiro é feito uma busca pela variável 'nome' dentro da função,
caso esta variável não exista, ela será procurada na função anterior.
*/
function pessoa(){
    const nome = "Paulo"
    function dizerNome(){
        const nome = 'Pablo'
        console.log(nome)
    }
}




