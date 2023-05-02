//  O QUE É UMA FUNÇÃO
/*
    Uma função é como se fosse um sub-programa dentro de um programa.
    Através dela podemos fazer com que o nosso programa excute determinada ação ou retorne 
    algum valor. Algumas das vantagens de se utilizar funções.:

    Reutilização de código: As funções permitem que você escreva um bloco de código que pode ser reutilizado várias vezes em diferentes partes do seu programa. Isso pode economizar muito tempo e esforço, além de tornar seu código mais modular e organizado.

    Abstração: As funções podem encapsular complexidade e abstrair detalhes do seu código, tornando-o mais fácil de entender e manter. Isso pode ser particularmente útil para funções que realizam tarefas complexas ou repetitivas.

    Modularidade: As funções podem ser combinadas para criar programas maiores e mais complexos. Isso torna seu código mais modular e fácil de entender, permitindo que você se concentre em partes específicas do seu programa sem se preocupar com os detalhes do resto.

    Escopo: As funções têm seu próprio escopo, o que significa que as variáveis ​​definidas dentro de uma função não afetam as variáveis ​​definidas fora dela. Isso ajuda a evitar conflitos e erros no seu código.
*/


//                              ENTENDENDO UMA FUNÇÃO
/*
    Primeiramente nós declaramos uma função utilizando a keyword "function".
    Depois colocamos um nome para esta função. As regras para criar o nome são as mesmas dos nomes das variáveis.
    Após o nome, abrimos e fechamos parêntesis '()'. 
    Não somos obrigados a colocar nada nestes parêntesis, mas o que colocamos são chamados de "parâmetros".
    
    Os parâmetros são como variáveis vazias, que terão seus valores atrubuidos quando invocarmos uma função.
    E assim que o parâmetro receber um valor, ele irá passar para o código que está no corpo da função
*/


//                              ENTENDENDO O QUE É UM MÉTODO
/*
    Um método é apenas uma função que pertence a um objeto, nada além disso.

    O "this" é muito utilizado nos métodos, e eles se referem ao próprio objeto, no contexto do escopo.

*/ 
let pessoa_01 = {
    name: 'Guilherme',
    sobrenome: 'Pires',

    saudacao: function(){
        return `Olá, eu me chamo ${this.name}` // seria como dizer "pessoa_01.name"
    }
}
console.log(pessoa_01.saudacao());


// Podemos simplificar como o método está no corpo do objeto.
pessoa_01 = {
    name: 'Flora',
    sobrenome: 'Pires',

    saudacao(){                                // foi simplificado; não precisa da palavra "function"
        return `Olá, eu me chamo ${this.name}` // seria como dizer "pessoa_01.name"
    }
}
console.log(pessoa_01.saudacao());






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





// DEFININDO UM VALOR PADRÃO AOS PARÂMETROS
/*
    Vamos supor que você possua uma função de soma.
    Esta função possui dois parâmetros.

    Caso o usuário tente somar sem passar os argumentos ao invocar a função, teremos um 
    "NaN".
    Para "resolver" isto (entre aspas pois não é necessariamente um problema), podemos dizer
    que o parâmetro possui um valor padrão, como no exemplo abaixo, onde possuímos dois parâmetros
    e caso você não passe os argumentos para eles, o valor será 0.
*/
function sum(num1 = 0, num2 = 0){
    console.log(num1 + num2)
}
sum() // 0 






// ARROW FUNCTION
/*
    - Quando há somente um parâmetro, os parêntesis não são obrigatórios
    - Quando há somente uma linha de código no corpo da função, as chaves e nem "return" são necessários
*/
const DigaOi = name => `Oi ${name}.`
console.log(DigaOi('Guilherme'))






// FUNCTION FACTORY
/*
    - Utilizadas para criar novos objetos de maneira mais prática;
    - Menos repetição desncessária, código mais limpo

    * Vamos supor que você precisa cadastrar celulares em seu código utilizando objetos.
    * Cada celular possui uma marca, um modelo, tamanho, capacidade da bateria e outros atributos.
    * Para você não criar infinitos objetos com parâmetros repetidos, você pode usar esta function.
*/
function criarCelular(marca, modelo, tamanhoTela, capacidadeBateria){
    return{
        modelo: modelo,
        marca: marca,
        tamanhoTela: tamanhoTela,
        capacidadeBateria: capacidadeBateria
    }
}
// AGORA PODEMOS CRIAR DIVERSOS CELULARES DE MANEIRA PRÁTICA.:
const celular_01 = criarCelular('Motorola', 'Mto G5', 4.7, 5000);
const celular_02 = criarCelular('Asus', 'A-Play', 5.4, 8000);

// PARA ENCURTAR A FUNÇÃO, PODEMOS DIGITAR APENAS O NOME DO PARÂMETRO. 
function creatCellphone(marca, modelo, tamanhoTela, capacidadeBateria){
    return{
        marca,
        modelo,
        tamanhoTela,
        capacidadeBateria
    }
}
const celular_03 = creatCellphone('Asus', 'SUS-p9', 7.4, 12000);
