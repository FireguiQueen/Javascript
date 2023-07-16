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
  for (const estudante in notasDosEstudantes) {
    const notas = notasDosEstudantes[estudante];
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log(`${estudante}: Média ${media.toFixed(2)}`);
  }
  