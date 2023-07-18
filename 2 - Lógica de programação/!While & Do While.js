// While
/*
    Ambas a estruturas (while & e Do While) são bem parecidas com o laço de repetição 'for'.
    Geralmente iremos utilizar o while quando não sabemos o número exato de iterações
    que serão feitas.

    While significa "enquanto".. Ou seja, enquanto determinada condição for verdadeira,
    execute o bloco de códigos.
    Neste caso, temos uma variável de controle (que deve ser colocada fora da estrutura).
    E é perguntado "variável numero é menor ou igual a 10?", se a resposta for "true", o bloco
    será executado.
*/
let numero = 0;
while(numero <= 10){
    console.log(numero)
    numero++
}



// Do While
/*
    O Do While é bem parecido com o While, mas há uma pequena diferença.
    O while verifica a condição, e se ela for 'true', o bloco é executado.

    O Do While primeiro executa o bloco de código, e depois verifica a condição.
*/
let i = 10
do{
    console.log('Olá')
} while(i !== 10)