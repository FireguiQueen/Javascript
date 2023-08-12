// ESCOPO LÉXICO
/*
    Um escopo 'léxico', também conhecido como escopo 'estático' é um conceito que nos diz 
    "quem pode acessar quem".

    As variáveis e símbolos podem ser declarados em diferentes partes do código, como dentro de 
    funções, blocos condicionais (if/switch) ou loops(while, for..). 
    O escopo léxico determina onde essas variáveis podem ser referenciadas ou modificadas. 
    Geralmente, o escopo léxico é definido pela estrutura hierárquica do código fonte e pela 
    forma como as funções e blocos estão aninhados.
*/  
/*  
    Um exemplo bem simples é uma função com um 'while' dentro.
    O 'While' é capaz de acessar valores de variáveis nos escopos anteriores.
    Além de poder acessar o valor, ele também é capaz de modificá-lo.
    
    - No exemplo, o loop (while) está acessando o valor de X e perguntando se ele é maior que 5.
    - E enquanto o valor da variável 'X' for maior que 5, ele irá tirar -1 do valor do X.
*/
function funcao(){
    while(x > 5){
        x--
    }
}


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


