//              Dados primitivos
/*  Dados primitivos são os tipos de dados mais básicos e fundamentais em uma linguagem de 
    programação. Esses tipos de dados são os blocos de construção essenciais para se trabalhar 
    com variáveis, expressões e algoritmos.

    Eles são importantes porque permitem que os programadores realizem cálculos e manipulem 
    dados de várias maneiras, formando a base para estruturas de dados mais complexas e tipos 
    de dados personalizados.
*/
// Em javascript, podemos usar a função "typeof" para ser o tipo de dado um valor.
console.log(typeof('oi'))


// Strings
/*
    A "string" é uma cadeia de caracteres.
    Veremos strings quando utilizamos aspas (" "), aspas simples (' ') e crase (` `).
*/
const frase = "Olá, isto é uma string!"
console.log(typeof frase)



// Number
/*
    O "number" são números que não são strings.
    No mundo real, podemos dizer que temos: números inteiros e quebrados.
    Mas no Javascript, isso não "importa", no final, independente do tipo do número, ele sempre será do tipo "Number".
    Estou ressaltando isto pois em outras linguagens, vemos que um número quebrado será de um tipo diferente de um número inteiro.
*/
const saldoConta = 45235
console.log(typeof saldoConta)



// Undefined
/*
    Como o próprio nome já nos diz, "undefined" é um valor que não foi definido.
    Podemos observar a aparição do "undefined" quando não definimos valores.
*/
let pessoa;
console.log(pessoa)


// Null
/*
    Não confunda "undefined" com "null", mesmo que ambos apontem para lugar nenhum na memória, esses dados são diferentes.
    O "null" é um tipo que nós, os desenvolvedores colocamos proprositalmente.

    Vamos supor que você esteja numa rede social, e nela, você pode alterar a cor do background do seu perfil.
    Haverá diversas opções.: vermelho, azul, verde e uma das mais importantes -> "nenhuma".
    Então podemos pensar que, quando o usuário escolher a opção "nenhuma" cor, o valor da variável "background"
    pode ser nulo. Logo, neste exemplo, o "null" pode ser usado para representar a ausência de um valor válido.

    E também utilizamos "null" quando precisamos que uma variável ou qualquer outra coisa não pode ter um tipo definido.
*/
const background = null;



// Boolean
/*
    Um valor booleano se refere a somente uma coisa: falso ou verdadeiro.
    
    Podemos pensar numa academia, onde trará descontos a clientes que estão treinando há mais de 
    dois anos.
    Podemos dizer que, se um cliente treina há dois anos, o valor será true, caso treine há menos de dois anos,
    será false.

    Também podemos pensar num sistema escolar de aprovação/reprovação.
    Se um aluno for aprovado, será true, se for reprovado será false.

    Mas o boolean vai um pouco além dos exemplos acima.
    Dependendo do resultado (true/false), podemos fazer com que ocorra alguma ação, então por exemplo,
    se a aprovação do aluno Gustavo for igual a "true", emita um certificado parabenizando-o. Se a aprovação
    for "false", emita um aviso e envie ao aluno. 
*/

