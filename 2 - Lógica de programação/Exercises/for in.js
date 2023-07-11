// Imprima todas as propriedades e valores do objeto carro
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata'
};
    // Resposta
    let carro_inf = ''
    for(let caracteristicas in carro){
        carro_inf += `${caracteristicas}: ${carro[caracteristicas]}
        `
    }
    console.log(carro_inf)




// Conte o número de propriedades do objeto aluno
const aluno = {
    nome: 'João',
    idade: 20,
    curso: 'Engenharia',
    universidade: 'Universidade XYZ'
};
    // Resposta
    let qntPropriedade = 0;
    for(let NumeroPropriedades in aluno){
        qntPropriedade++
    }
    console.log(qntPropriedade)

    // Resposta II 
    const propriedades = [];
    for(let NumeroPropriedades in aluno){
        propriedades.push(NumeroPropriedades);
    }
    console.log(propriedades.length)




// Imprima os índices e valores do array de frutas
const frutas = ['maçã', 'banana', 'laranja', 'uva'];

// Resposta