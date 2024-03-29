// ESCOPO LÉXICO
/*
    Um escopo 'léxico', também conhecido como escopo 'estático' é um conceito que nos diz 
    "quem pode acessar quem".

    As variáveis podem ser declaradas em diferentes partes do código, como dentro de 
    funções, blocos condicionais (if/switch) ou loops(while, for e etc). 
    O escopo léxico determina onde essas variáveis podem ser referenciadas ou modificadas. 
    Geralmente, o escopo léxico é definido pela estrutura hierárquica do código fonte e pela 
    forma como as funções e blocos estão aninhados.

    De forma resumida, o escopo léxico refere-se à região do código fonte de um programa 
    onde uma determinada variável é visível e acessível.
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
// console.log(palavra2) retorna um erro dizendo que esta variável não foi definida.


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
    Closure é a capacidade de salvar dados de um escopo léxico onde a função
    foi chamada. 

    No exemplo abaixo, temos uma função.
    No escopo desta função há uma variável 'X' que recebe '0'.
    E embaixo desta variável, há uma função responsável por somar '+1' à variável '0'.

    Por fim, estamos retornando a função "incrementar" (que é a responsável por somar +1), e quando
    retornamos ela, ele executa seu bloco de códigos, adicionando +1 a nossa variável.

    Para salvar o valor da nossa variável "X", colocamos nossa função em uma variável, criando
    assim, uma closure.
*/
// Por exemplo
function somar(){
    let x = 0;

    function incrementar(){
        x++
        console.log(x)
    } 

    return incrementar
}
const somarMaisUm = somar();
somarMaisUm() // retorna 1
somarMaisUm() // retorna 2
somarMaisUm() // retorna 3






// Callbacks
/*
    Callback nada mais é do que uma função passada para outra através de argumentos.

    O callback está por toda a parte. Podemos vê-lo no 'setTimeOut', 'setInterval',
    'addEventListener'.. 
    
    Teremos uma função principal, e ela possui um parâmetro.
    Ao invocarmos esta função, passaremos como argumento qual outra função desejamos executar.
*/
function funcaoB(){
    console.log('B')
}
function qualFuncaoExecutar(funcao){
    console.log('Executando a função..:')
    funcao();
}
qualFuncaoExecutar(funcaoB)


// Por qual motivo não fazer isto de maneira direta? Afinal, nos pouparia linhas de código
// Por exemplo:
function qualFuncaoExecutar(){
    funcaoB();
}
qualFuncaoExecutar()

/*
    ~~~ Explicação
    Sim, isto de fato nos poupou linhas de código, porém, deixou o nosso código menos flexível.
    Agora, para executar outra função (funcaoA) por exemplo, teriamos que mudar isto no nosso
    próprio código, sendo que, ao utilizar callback, teriamos apenas de mudar o argumento.
    
    Um exemplo de callback seria: 
    > O usuário escolhe dois números.
    > O usuário escolhe qual operação fazer com esses dois números (multiplicação, divisão e soma).

*/
function somarNumeros(x,y){
    return x + y;
}
function multiplicarNumeros(x,y){
    return x*y;
}
function escolherOperacao(x,y, operacao){
    // manda os dois números colocados ao invocar a função, e coloca paratensis ao lado do nosso
    // parâmetro. O nome "operacao" será substituído pelo terceiro argumento que passamos.
    return operacao(x,y);
}

//Passa 3 argumentos: valor do 1º número, valor do 2º, qual operação fazer com esses dois números
console.log(escolherOperacao(4,2, somarNumeros))