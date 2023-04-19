// Com base no array abaixo.:
let nomes = ['Ana', 'João', 'Maria', 'Pedro', 'José'];

// Acesse o segundo nome do array e o imprima no console
console.log(nomes[1]);

// Remova o último nome do array e o imprima no console
const lastItemRemoved = nomes.pop();
console.log(`O item removido do final da lista foi: ${lastItemRemoved}`);

// Remova o primeiro nome do array e o imprima no console
const firstItemRemoved = nomes.shift();
console.log(`O item removido do início da lista foi: ${firstItemRemoved}`);

// Adicione um novo nome no final do array e imprima o array completo no console
nomes.push('Pablo');
console.log(nomes);


// Adicione um novo nome no início do array e imprima o array completo no console
nomes.unshift('Flora');
console.log(nomes);

// Conte quantos nomes existem no array e imprima o resultado no console
console.log(`Esta lista possui ${nomes.length} nomes`);

// Pegue os nomes do segundo ao quarto elementos do array e imprima-os no console
console.log(nomes.slice(1,5))