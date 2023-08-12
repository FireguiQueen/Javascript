// ESCOPO LÉXICO
/*
    Um escopo 'léxico', também conhecido como escopo 'estático' é um conceito que nos diz 
    "quem pode acessar quem".

    As variáveis podem ser declaradas em diferentes partes do código, como dentro de 
    funções, blocos condicionais (if/switch) ou loops(while, for e etc). 
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
    let x = 10;
    while(x > 5){
        x--
    }
}


//  No contexto global, uma variável recebe a string "OI";
//  E dentro de uma função, podemos chamar esta variável. 
const palavra = "oi"
function digaOi(){
    console.log(palavra) // retorna "oi"
}

// O contrário disso não funcionaria.
function digaOla(){
    const palavra2 = "Oi"
}
console.log(palavra2) // retorna um erro dizendo que esta variável não foi definida.


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





// CLOSURES 
/*
    Closure é a capacidade 
