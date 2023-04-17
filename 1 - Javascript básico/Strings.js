console.log('HHM');
console.log("HHM");
console.log(`HHM`);

/*
OBS:
    Em relação as aspas, aspas duplas e crase, não há NENHUMA diferença em questões de memória/eficiência.
    Você é livre para escolher qual será utilizada, mas há um porém.
*/


// Muita das vezes sua string irá precisar possuir aspas simples (''). Sendo assim,
// você será obrigado a utilizar outro caracter para formar a string, como no exemplo abaixo.
console.log("He's a nice guy");



// Em outros casos, seu string irá precisar armazenar aspas duplas e aspas simples, então
// você será obrigado a utilizar crase (``) para formar a string.
// Pois perceba que a frase já possui aspas duplas e simples. 
console.log(`Last year he told me "I'll be rich, like a monkey"`)



// As crases também são importantes para chamar variáveis. Através delas, podemos usar ${} e chamar uma variável.
// Perceba que ambas dão o "mesmo" resultado, porém tivemos menos trabalho usando as template strings.

// Método convencional:
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
// Nesta frase temos 28 caracteres, onde 23 são letras e 5 são espaços.  
// Lembrando que sempre começamos a contar do 0. Então.: 0 = 'E', 1 = 'l', 2 = 'e', 3 = ' '.
// Podemos pedir determinado indice usando colchetes. 
let frase = "Ele é uma pessoa muito legal"
console.log(frase[2])
