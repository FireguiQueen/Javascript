console.log('HHM');
console.log("HHM");
console.log(`HHM`);

/*
OBS:
Em relação as aspas, aspas duplas e crase, não há NENHUMA diferença em questões de memória.
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
