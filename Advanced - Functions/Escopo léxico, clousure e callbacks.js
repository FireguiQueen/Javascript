// ESCOPO LÉXICO
/*
    Um escopo 'léxico', também conhecido como escopo 'estático' nos diz como as variáveis serão
    acessadas e distribuidas em nosso programa. 
    Por exemplo, você pode ter uma função que contem duas coisas:
    - Uma variável;
    - Uma função (seria a "filha" dela).

    Nesta função "filha" é possível acessar o valor da variável colocada na função pai, porém,
    o contrário não é possível.
*/  

//  No contexto global, uma variável recebe a string "OI"
//  E dentro de uma função, podemos chamar esta variável. 
const palavra = "oi"
function digaOi(){
    console.log('oi')
}

// O contrário disso não funcionaria
function digaOla(){
    const palavra2 = "Oi"
}
console.log(palavra2) // retorna um erro dizendo que esta variável não foi definida.

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

/*
O escopo lexical descreve como as funções aninhadas (também conhecidas como "filho") 
têm acesso a variáveis definidas em escopos pai.
*/




// CLOUSURES 


