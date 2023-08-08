// O QUE OCORRE SE PASSARMOS ARGUMENTOS PARA FUNÇÕES SEM PARÂMETROS?
/*
    Em muitas linguagens, teriamos erros sendo retornados, porém, em Javascript isto não
    ocorre.

    Ao passar argumentos para funções sem parâmetros, esses argumentos serão armazenados
    em uma variável chamada "arguments" --> CASO A FUNÇÃO SEJA DE DECLARAÇÃO: function exemplo(){}

    Independente se o argumento será passado para um parâmetro ou não, ele irá ir para a variável
    chamada "arguments".
    Em resumo, todos os argumentos passados para uma function declaration irão ser armezenados numa
    variável chamada "arguments". 
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
