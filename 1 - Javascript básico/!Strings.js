/*
    Em relação as aspas, aspas duplas e crase, não há NENHUMA diferença em questões de memória/eficiência.
    Você é livre para escolher qual será utilizada, mas há um porém.
*/
console.log('HHM');
console.log("HHM");
console.log(`HHM`);


/* 
    Muita das vezes sua string irá precisar possuir aspas simples (''). Sendo assim,
    você será obrigado a utilizar outro caracter para formar a string, como no exemplo abaixo.
*/  console.log("He's a nice guy");


/* 
    Em outros casos, sua string irá precisar armazenar aspas duplas e aspas simples, então
    você será obrigado a utilizar crase (``) para formar a string.
    Pois perceba que a frase já possui aspas duplas e simples. 
*/  console.log(`Last year he told me "I'll be rich, like a monkey"`);



// As crases também são importantes para chamar variáveis. Usamos ${} parar chamar uma variável.
// Ambas dão o mesmo resultado, porém tivemos menos trabalho usando as template strings (${}).

// Método convencional (concatenação):
const frase_1 = "Valar Morghulis";
console.log('A frase "' + frase_1 + '" é do Game of Thrones, uma série maravilhosa!');

// Método "avançado" (template strings):
const frase_2 = "This is not meth";
console.log(`A frase "${frase_2}" é do Breaking Bad, minha série favorita!`);



/*
    Vamos supor que, por algum motivo, você precise fazer uma string com aspas duplas e 
    nesta mesma string, você também irá precisar colocar aspas duplas
    O caractere '\' seria uma solução. Veja o exemplo abaixo.
    Você irá colocar a '\' antes das aspas duplas, e antes dela fechar.
*/ 
console.log("Ele me disse \"Deseja crecer? Coma, não importe o que for, apenas coma\"  ")



// *********************************************************************************

/*
    Strings são objetos iteráveis.
    Isto significa que você pode iterar sobre seus caracteres usando um loop ou um método de iteração.

    Iterar é um termo usado na programação para se referir ao processo de percorrer uma coleção de dados, como uma lista, um array, um objeto ou uma string, item por item. 
    Sendo assim, cada caractere em nossa string é representado por um índice.
*/

// Nesta frase temos 28 caracteres. Onde 23 caracteres são letras e 5 são espaços em branco.  
// Lembrando que sempre começamos a contar do 0. Então temos: 0 = 'E', 1 = 'l', 2 = 'e', 3 = ' '.
// Ao colocar um número nos colchetes, estamos pedindo qual caractere está naquele índice. 
let frase = "Ele é uma pessoa muito legal"
console.log(frase[2])


// Podemos saber o indice de determinada palavra usando indexOf.
console.log(frase.indexOf('pessoa')) // "pessoa" está no número 10  (pois o 'p' começa no indice 10).

// Nesta função, podemos passar dois parâmetros.: 
// qual palavra desejamos achar o indice & a partir de qual indice devemos procurar esta palavra
console.log(frase.indexOf('pessoa', 10))

// Se colocarmos um indice onde a palavra "pessoa" não exista mais, será retornado um valor negativo.
// Isto informa que a palavra não existe a partir daquele determinado indice
console.log(frase.indexOf('pessoa', 11));



// *************************************************************

// Slice
/* 
    Slice significa "pedaço". Ou seja, iremos pedir um pedaço de determinada string.

    Podemos passar no mínimo um parâmetro e no máximo dois parâmetros.
    O primeiro parâmetro usamos para escolher A PARTIR de qual indíce ele irá fatiar
    O segundo parâmetro usamos para escolher ATÉ qual indíce ele irá fatiar.
*/  
const frase_3 = 'You got my eyess';
console.log(frase_3.indexOf('got')) // "got" está no indíce 4.
console.log(frase_3.slice(4))       // Podemos informar que queremos fatiar a partir de "got"

// Também podemos adicionar o segundo parâmetro, onde iremos definir até onde ele pode fatiar.
// É importante saber que, "got" termina no indice 6, mas se colocarmos "6" no segundo parâmetro, ele irá cortar a letra "t" de "got".
console.log(frase_3.slice(4, 7)) 




// *********************************************************************************



// split
/*
    Transformamos nossa string em um array.
    Podemos passar no mínimo um parâmetro e no máximo dois parâmetros.
    No primeiro colocamos a partir de qual caracter será formado cada item do array
    No segundo colocamos quantas vezes queremos o javascript faça isso, assim que ele parar de "splitar", nossa string não será mais lida.

    Vale lembrar que o caracter escolhido sempre será excluido.
*/
const frase_5 = 'Gustavo Fring is a nice guy';
console.log(frase_5.split('a'))

// *********************************************************************************



// ToUpperCase() & toLowerCase()
/*
    ToUpperCase() deixa sua string em maíuscula, e toLowerCase() deixa em minúscula.
*/
const frase_4 = 'Faça chuva ou faça sol, eu estarei lá.';
console.log(frase_4.toUpperCase());
console.log(frase_4.toLowerCase());

// *********************************************************************************

