// O QUE OCORRE SE PASSARMOS ARGUMENTOS PARA FUNÇÕES SEM PARÂMETROS?
/*
    Em muitas linguagens, teriamos erros sendo retornados, porém, em Javascript isto não
    ocorre.

    Ao passar argumentos para funções sem parâmetros, esses argumentos serão armazenados
    em uma variável chamada "arguments" (apenas para funções que fazem uso da keyword function).

    Independente se o argumento será passado para um parâmetro ou não, ele irá ir para a variável
    chamada "arguments".
    Em resumo, todos os argumentos passados irão ser armezenados numa variável chamada "arguments". 
*/
function sayHi(){
    console.log(arguments)
}
sayHi(525, 'Broly', 154);
// Será retornado todos os argumentos enviados a função: 525, 'Broly', 154




// O QUE OCORRE AO CHAMAR UM PARÂMETRO QUE NÃO FOI DADO NENHUM ARGUMENTO A ELE
/*
    Ao tentar chamar o parêmetro que não foi passado nenhum argumento a ele, seu valor
    será "undefined"
*/
function sayHello(person){
    console.log(`Olá, ${person}!`)
}
sayHello()




// DEFININDO VALORES PADRÕES AOS PARÂMETROS
/*
    Os valores padrões são chamados caso não tenha sido passado argumentos aos parâmetros
    chamados.
    Há duas maneiras de definir um valor padrão.
    Em ambas estaremos definindo o valor padrão para 0.
*/
/* 1 - É bem simples, dentro do parentesis iremos colocar um sinal, e escolher qual será 
       o valor padrão do parâmetro */
function soma(a = 1, b = 1){
    console.log(a + b)
}
soma()

/* 2 - Olhando parece um pouco complexo, porém é bem simples. Estamos fazendo uso do 
       operador lógico "OR", e este operador só precisa que um operando seja "TRUE". 
       Como o parâmetro 'a' não foi definido, seu valor é undefined, ou seja, estamos
       fazendo "undefined || 0". Como undefined é "falsy", o nosso operador lógico 
       irá retornar o último valor, que no caso, é 0. */
function soma1(a,b){
    a = a || 0;
    b = b || 0;
    console.log(a + b)
}
soma1()




// QUAL A MELHOR FORMA PARA PASSAR ARGUMENTOS PARA PARÂMETROS ESPECÍFICOS? 
/*
    Podemos imaginar que você está com uma função que possui 3 parâmetros: a, b, c.
    No final desta função, ela irá retornar a soma entre os 3 parâmetros.

    Mas como pular o parâmetro 'b' e passar o argumento para o 'c'?
    Neste caso, iremos fazer o uso do "null".
    Não coloque outro valor além do "null" caso seu objetivo seja pular um ou mais parâmetros
*/
function sum(a, b, c){
    console.log(a + b + c);
}
sum(10, null, 20) // retorna trinta

// Agora vamos supor que você queira pular um parâmetro, porém mantendo seu valor padrão
/*
    Quando usamos o "null" para pular um parâmetro na hora de passar os argumentos, o valor
    padrão definido ao parâmetro é "ignorado", afinal, você já passou um valor à ele.
    Para resolvermos isto, será necessário o uso do "undefined".
*/
function sum1(a = 1, b = 1, c = 1){
    console.log(a + b + c)
}
sum1(50, undefined, 10) // retorna 61.




function acumulador(operador, numeroAcumulacao, ...numbers){
    let valorFinal = numeroAcumulacao;
    for(let i of numbers){
        if(operador === '+') valorFinal += i;
            else if (operador === '-') valorFinal -= i;
            else if (operador === '*') valorFinal *= i;
                else valorFinal /= i;
    }
    return valorFinal
}




function multiplicador(multiplicaPorQuanto){

    function multiplicando(n){
        return n * multiplicaPorQuanto;
    }

    return multiplicando;
}

const triplicar = multiplicador(3);
console.log(triplicar(4))
