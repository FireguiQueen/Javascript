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
function letterOcurrency(str){
    const ocorrencia = {};

    for(let char in str){
        const letra = str[char].toLowerCase();
        ocorrencia[letra] = (ocorrencia[letra] || 0 ) + 1;
    }
    return ocorrencia
}
console.log(letterOcurrency('Hello World'))


// Objeto representando a lista de compras
const listaDeCompras = {
    banana: 2,
    maçã: 5,
    laranja: 3,
    pão: 2,
    leite: 1
};
// Usando o for...in para percorrer os itens da lista de compras
for(let item in listaDeCompras){
    console.log(item)
}




// Função que separa números pares e ímpares em duas listas
// Usando o for...in para percorrer a lista de números
function separarParesEImpares(numeros) {
    const resultado = {
      pares: [],
      impares: []
};

    for(let i in numeros.sort()){
        if((numeros[i] % 2) !== 0){
            resultado.impares.push(numeros[i])
        } else{
            resultado.pares.push(numeros[i])
        }
    }
    
    return resultado
}
const myNumbers = [1,5,623,6,3,23]
console.log(separarParesEImpares(myNumbers))


// Objeto com os nomes e notas dos estudantes
const notasDosEstudantes = {
    João: 7.8,
    Maria: 9.2,
    Pedro: 6.5,
    Ana: 8.9
  };
  
// Usando o for...in para percorrer os estudantes e calcular a média
function calcularMedia(estudantes){
    const notas = [];

    for(let aluno in estudantes){
        notas.push(estudantes[aluno])
    }
    
    const todasAsNotas = notas.length;
    let notaTotal = 0;
    for(let teste in notas){
        notaTotal += notas[teste]
    }
    return notaTotal/ todasAsNotas
}

console.log(calcularMedia(notasDosEstudantes))
  