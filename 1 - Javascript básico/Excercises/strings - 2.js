// Faça uma variável que possua um nome e sobrenome.

// Descubra a.:
// Quantidade de letras nome;
// A segunda letra do nome;
// As últimas 3 letras do nome;
// As palavras do nome; 
// Nome com letras maísculas; 
// Nome com letras minúsculas; 

const name = 'Alina Gingertail'
console.log(`Quantia sem espaço(s): ${name.replaceAll(' ', '').length} 
Quantia com espaço(s): ${name.length}`);

console.log(name[1]);

console.log(name.slice(-3))

console.log(name.split)
