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
    for(let i of arguments){
        console.log(i)
    }
}
sayHi(525, 'Broly', 154);

