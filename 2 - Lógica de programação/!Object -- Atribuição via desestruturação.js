//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*
    A atribuição via desestruturação é uma sintaxe em JavaScript que permite extrair valores 
    de arrays ou objetos e atribuí-los a variáveis individuais de forma concisa. 
    Isto é útil quando você deseja atribuir vários valores de uma vez ou quando deseja extrair 
    propriedades específicas de um objeto.
*/

// OBJETO 
const pessoa = {
    nome: 'Julia',
    endereco: {
        rua: 'Oswaldo pinto',
        casa: '296'
    }
}

// Atribuindo variáveis a propriedades (de maneira comum; não estamos desestruturando)
const nome_da_pessoa = pessoa.nome 
console.log(nome_da_pessoa)

//****************************************************************************// 

// Objeto comum
const caneca = {
    cor: 'preta'
}

// Atribuindo uma variável a propriedade 'cor' do objeto
/*  
    Primeiro colocamos qual seria o tipo da variável (const, let ou var). 
    Depois abrimos chaves, dentro dela selecionamos as propriedades que desejamos.
    Após selecionar a propriedade, coloque dois pontos e o nome que deseja para a variável
    Por fim, escolhe o objeto (ele precisa possuir a propriedade colocada anteriormente).
*/
const {cor: cor_da_caneca} = caneca;
console.log(cor_da_caneca) // preta;


// Simplificando o código
/*
    Não precisamos colocar os dois pontos e escolher um nome de variável.
    Podemos fazer isto diretamente. Por exemplo, se a proriedade se chama "cor",
    basta colocar "cor" entre as chaves.
    A sua variável irá se chamar 'cor'.
*/
const {cor} = caneca;
console.log(cor) // preta



const {endereco: full_address, endereco: {rua: street, casa: house}} = pessoa;
console.log(full_address, street, house)