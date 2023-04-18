// Faça uma variável que possua um nome e sobrenome.

// Descubra a.:
// Quantidade de letras nome;
// A segunda letra do nome;
// As últimas 3 letras do nome;
// As palavras do nome; 
// Nome com letras maísculas; 
// Nome com letras minúsculas; 

const nome = 'Alina Gingertail'
console.log(`Quantia sem espaço(s): ${nome.replaceAll(' ', '').length} 
Quantia com espaço(s): ${nome.length}`);

console.log(nome[1]);

console.log(nome.slice(-3))

console.log(nome.split(' '))

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())