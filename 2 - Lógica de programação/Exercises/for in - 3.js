// OBJETO COM ALGUMAS PROPRIEDADES
const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
};
// USANDO O FOR...IN PARA PERCORRER AS PROPRIEDADES DO OBJETO
function allKeys(obj){
    let chavesObj = 'Propriedades do objeto.: ';
    for(const keys in pessoa){
        chavesObj += `${keys}, `
    }
    return chavesObj.slice(0, -2)    
}
console.log(allKeys(pessoa))


  


// FUNÇÃO QUE CONTA A OCORRÊNCIA DE CADA LETRA EM UMA STRING
function letterOcurrency(string){
    const ocurrency = {};

    for(let letra in string){
        const formattedLetter = string[letra];

        if(formattedLetter !== ' '){
            ocurrency[formattedLetter] =  ocurrency[formattedLetter || 0] + 1
        }
    }

    return ocurrency
}
console.log(letterOcurrency('Livro'))


// Objeto representando a lista de compras
const listaDeCompras = {
    banana: 2,
    maçã: 5,
    laranja: 3,
    pão: 2,
    leite: 1
};