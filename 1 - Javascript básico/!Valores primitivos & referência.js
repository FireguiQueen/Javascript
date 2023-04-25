//              Valores Primitivos
/*  
    Dados primitivos são os tipos de dados mais básicos e fundamentais em uma linguagem de 
    programação. Esses tipos de dados são os blocos de construção essenciais para se trabalhar 
    com variáveis, expressões e algoritmos.

    Eles são importantes porque permitem que nós realizemos cálculos e manipulação de
    dados de várias maneiras, formando a base para estruturas de dados mais complexas e tipos 
    de dados personalizados.
*/

//  EM JAVASCRIPT, PODEMOS USAR A FUNÇÃO "TYPEOF" PARA SABR O TIPO DE DADO DE UM VALOR.
    console.log(typeof('oi'))



// STRINGS (primitivo)
/*
    A "string" é uma cadeia de caracterese.
    Veremos strings quando utilizamos aspas (" "), aspas simples (' ') e crase (` `).
*/
const frase = "Olá, isto é uma string!"
console.log(typeof frase)



// NUMBER (primitivo)
/*
    O "number" são números que não são strings.
    No mundo real, podemos dizer que temos: números inteiros e quebrados.
    Mas no Javascript, isso não "importa", no final, independente do tipo do número, ele sempre será do tipo "Number".
    Estou ressaltando isto pois em outras linguagens, vemos que um número quebrado será de um tipo diferente de um número inteiro.
*/
const saldoConta = 45235
console.log(typeof saldoConta)



// UNDEFINED (primitivo)
/*
    Como o próprio nome já nos diz, "undefined" é um valor que não foi definido.
    Podemos observar a aparição do "undefined" quando não definimos valores.
*/
let pessoa;
console.log(pessoa)


// NULL (primitivo)
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
console.log(background)



// BOOLEAN (primitivo)
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
    se a aprovação do aluno Gustavo for igual a "true", emita um certificado parabenizando-o. 
    Se a aprovação for "false", emita um aviso e envie ao aluno. 
*/
const alunoGustavo = true;
console.log(alunoGustavo == true? 'Parabéns, Gustavo' : 'Você foi reprovado');



//******************************************************************************** */

//              Valores por Referência
/*  
    Valores por referência (Arrays, functions & objects) são valores que são atribuídos a uma variável e são armazenados 
    na memória como um endereço de referência, em vez de serem armazenados diretamente 
    como um valor.

    Ao trabalhar com valores por referência, é importante lembrar que ao modificar uma variável,
    você pode estar modificando o valor original que está armazenado na memória, uma vez que 
    todas as variáveis que fazem referência ao mesmo endereço apontarão para o mesmo valor.

    Os valores por referência são valores mais complexos, responsáveis por desenvolver estruturas
    grandes de dados. Todo valor por referência armazena valores, sejam eles primitivos ou até mesmo
    outros valores por referência. Afinal, é possível ter um objeto dentro de outro objeto, é possível
    ter um objeto dentro de um array.. E assim por diante.
*/



// PRIMITIVOS OU POR REFERÊNCIA: diferenças práticas
/*
    Valores primitivos são imútaveis, isto significa que eles não podem ser alterados.
    Mas não confunda atribuição de valores com ALTERAÇÃO de VALORES.

    No exemplo abaixo, temos um valor primitivo (string), e logo abaixo, estamos dizendo 
    que o valor original "Gus" será "Heiseinberg".
    Mas isto NÃO é alteração dentro do valor, isto é apenas uma reatribuição de valores
    de variável.

    A reatribuição de um novo valor a uma variável contendo um valor primitivo é, 
    na verdade, a criação de um novo valor e não uma modificação do valor original.
*/
let name = 'Gus Fring'
name = 'Heiseing Berg' // Não estamos alterando o dado, e sim reatribuindo um novo valor a variável "name"

// JÁ NO EXEMPLO ABAIXO, ESTAMOS TENTANDO ALTERAR O VALOR, MAS ISTO É IMPOSSÍVEL POIS O VALOR É PRIMITIVO
let personagem = 'Jessie'
personagem[0] = 'P'
console.log(personagem[0], personagem) // perceba que o valor primitivo não foi alterado



//                                      CÓPIAS 
/*
    Quando dizemos que uma variável irá receber o valor PRIMITIVO de outra variável,
    é criado uma cópia.
    
    Por exemplo.:
    Você possui uma foto.
    Você faz uma cópia desta foto, e agora você possui duas fotos idênticas.
    Mas agora você é capaz de alterar a foto original, seja rabiscando ou desenhando nela,
    e isto não irá afetar a cópia.

    A mesma coisa vale caso você queira alterar a cópia, você pode rabiscar nela, pois você 
    não irá fazer alterações na foto original.

    É basicamente isto o que ocorre quando estamos usando valores primitivos.
    São criadas cópias.
*/
let person_01 = 'Evandro';
let person_02 = person_01; // agora esta variável é uma cópia da variável person_01.

/* 
    Isto significa que podemos alterar até mesmo a variável original, e a cópia irá continuar 
    retornando o primeiro valor da variável original.
*/
// MESMO ALTERANDO A VARIÁVEL ORIGINAL, A CÓPIA IRÁ RETORNAR "EVANDRO", POIS FOI O VALOR QUE ELA LOCALIZOU QUANDO FOI CRIADA.
person_01 = 'Paulo';
console.log(person_02); 



//                                      REFERÊNCIAS 
/*
    Pense na referência como se fosse um atalho de um arquivo .JPEG
    Se você abrir o arquivo usando o atalho, você chegará na imagem original.

    Isto quer dizer que, se você chegar na imagem usando o atalho, e fazer edições na imagem,
    o seu arquivo JPEG original será alterado.
    
    E quando estamos fazendo o uso de valores por referência, significa que, independentemente
    de qual variável alteremos, o valor original será alterado.

    Ao criar uma variável e colocar um valor por referência (arrays, objetos & funções) estamos
    dizendo que este valor é referenciado por aquela variável.

    Então qando você cria uma nova variável com um valor por referência, 
    essa nova variável não é uma cópia do valor original, mas sim uma nova referência 
    para o mesmo valor na memória.
*/
const alunosIdades = [14, 13, 14, 16, 14, 15, 13, 14];
let referencia = alunosIdades;

/*
    Mesmo alterando a variável "referencia", nós iremos alterar o valor da constante "alunosIdades".
    Como já foi dito, quando usamos um valor por referência, NÃO estamos fazendo cópias.
*/
referencia[0] = 13; // perceba que alteramos a "cópia", mas isto será refletido no valor orignal.
console.log(alunosIdades)
