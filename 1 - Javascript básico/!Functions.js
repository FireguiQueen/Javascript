//  O QUE É UMA FUNÇÃO
/*
    Uma função é como se fosse um sub-programa dentro de um programa.
    Através dela podemos fazer com que o nosso programa excute determinada ação ou retorne 
    algum valor.

    Reutilização de código: As funções permitem que você escreva um bloco de código que pode ser reutilizado várias vezes em diferentes partes do seu programa. Isso pode economizar muito tempo e esforço, além de tornar seu código mais modular e organizado.

    Abstração: As funções podem encapsular complexidade e abstrair detalhes do seu código, tornando-o mais fácil de entender e manter. Isso pode ser particularmente útil para funções que realizam tarefas complexas ou repetitivas.

    Modularidade: As funções podem ser combinadas para criar programas maiores e mais complexos. Isso torna seu código mais modular e fácil de entender, permitindo que você se concentre em partes específicas do seu programa sem se preocupar com os detalhes do resto.

    Escopo: As funções têm seu próprio escopo, o que significa que as variáveis ​​definidas dentro de uma função não afetam as variáveis ​​definidas fora dela. Isso ajuda a evitar conflitos e erros no seu código.
*/

// Entendendo uma função
/*
    Primeiramente nós declaramos uma função utilizando a keyword "function".
    Depois colocamos um nome para esta função. As regras para criar o nome são as mesmas dos nomes das variáveis.
    Após o nome, abrimos e fechamos parêntesis '()'. 
    Não somos obrigados a colocar nada nestes parêntesis, mas o que colocamos são chamados de "parâmetros".
    
    Os parâmetros são como variáveis vazias, que terão seus valores atrubuidos quando invocarmos uma função.
    E assim que o parâmetro receber um valor, ele irá passar para o código que está no corpo da função
*/


// FUNCTION DECLARATION
function saudacao(nome){         // declarando a função e um parâmetro;
    console.log(`Olá, ${nome}`); // corpo da função (o que ela irá fazer quando for invocada);
}                
saudacao('Otávio');  // invocando a função e passando o argumento para substituir o parâmetro.


/*
    Perceba que no exemplo acima, a nossa função não retornou nenhum valor.
    Tanto é que, se você digitar `console.log(saudacao('..'))` a função irá se excutar, retornando:
    'Olá, ..'
    Porém, isto també nos dará um "undefined", isto porque a função não retorna nenhum valor.
    A única coisa que esta função faz é executar o bloco de códigos que está no corpo dela.

    Vamos supor que você precise de uma função que retorne um valor onde será inserido numa tag
    HTML. Para isto, você irá precisar usar a keyword "return".
*/
    function soma(num1, num2){
        return num1 + num2
    }
    // lembre-se, esta função está apenas RETORNANDO um valor, mas agora precisamos de um lugar para este valor aparecer
    console.log(soma(1,2))



