/* 
  // EXERCÍCIO 1:
  // Suponha que temos uma array de objetos que representam pessoas com seus nomes e idades. 
  // Utilizando um loop, procure a primeira pessoa que tenha mais de 30 anos e imprima seu nome. 
  // Assim que encontrar essa pessoa, saia completamente do loop utilizando "break".
*/

const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 32 },
    { nome: 'Marcela', idade: 28 },
    { nome: 'Ricardo', idade: 42 },
    { nome: 'Juliana', idade: 22 }
];
for(let pessoa of pessoas){
    if(pessoa.idade > 30){
        console.log(pessoa.nome);
        break;
    }
}

  
  
  /* 
    // EXERCÍCIO 2:
    // Dada uma array de números, imprima todos os números pares presentes nessa array. 
    // Utilize "continue" para pular os números ímpares.
  */
  
const numeros = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32];
for(let num of numeros){
    if(num % 2 !== 0){
        continue;
    }
    console.log(num)
}  
  
  /* 
    // EXERCÍCIO 3:
    // Suponha que temos uma array de objetos que representam produtos com seus nomes e preços. 
    // Queremos calcular o valor total dos produtos, mas se algum produto tiver um preço maior do que 100, 
    // não queremos incluí-lo na soma. Utilize "continue" para pular os produtos com preço maior que 100.
  */
  
  const produtos = [
    { nome: 'Notebook', preco: 2500 },
    { nome: 'Smartphone', preco: 1200 },
    { nome: 'Fone de Ouvido', preco: 80 },
    { nome: 'Monitor', preco: 300 },
    { nome: 'Teclado', preco: 60 },
    { nome: 'Mouse', preco: 40 }
];
let precoTotal = 0;
for(let produto of produtos){
    if(produto.preco > 100){
        continue;
    }
    precoTotal += produto.preco
} 
console.log(precoTotal)
  
  