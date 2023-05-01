// Faça uma variável que possua um nome e sobrenome.
const name = 'Guilherme Pires'
// Descubra a.:
// Quantidade de letras nome;
console.log(name.replaceAll(' ', '').length);

// A segunda letra do nome;
console.log(name[1]);

// As últimas 3 letras do nome;
const separedNames = name.split(' ');
console.log(separedNames[0].slice(-3));

// As palavras do nome; 
console.log(separedNames)

// Nome com letras maísculas; 
console.log(name.toUpperCase())

// Nome com letras minúsculas; 
console.log(name.toLowerCase())



// Faça uma variável com uma frase. 
// Use aspas simples para criar, e nesta mesma frase você precisa colocar aspas simples.
const phrase = 'Ele se chama \'Gerald\', ele é um bruxo.' 


// FAÇA UMA FACTORY FUNCTION QUE POSSUA UM MÉTODO E DIZER SEU NOME E O ANO EM QUE NASCEU.
function sayNameAndDate(name, age){
    return{
        name,
        age,

        bornIn(){
            const date = new Date;
            const dateY = date.getFullYear();

            return `
            ${this.name} nasceu em ${dateY - this.age}
            `
        }
    }
}

let name01 = sayNameAndDate('Flora', 17)
console.log(name01.bornIn())

// *** ESCOLHA UM NÚMERO E.:
const number = 15.5375737
// Mostre a raiz quadrada;
console.log(number ** 0.5);

// Se é inteiro ou não;
console.log(Number.isInteger(number))

// Se é NaN ou não;
console.log(Number.isNaN(number))

// Arredonde para baixo;
console.log(Math.floor(number))

// Arredonde para cima;
console.log(Math.ceil(number))

// Deixe apenas duas casas decimais.
console.log(number.toFixed(2))








// Com base no array abaixo.:
let nomes = ['Ana', 'João', 'Maria', 'Pedro', 'José'];

// Acesse o segundo nome do array e o imprima no console
console.log(nomes[1])

// Remova o último nome do array e o imprima no console
nomes.pop()
console.log(nomes)

// Remova o primeiro nome do array e o imprima no console
nomes.shift()
console.log(nomes)

// Adicione um novo nome no final do array e imprima o array completo no console
nomes.push('Flora')
console.log(nomes)

// Adicione um novo nome no início do array e imprima o array completo no console
nomes.unshift('Pablo')
console.log(nomes)

// Conte quantos nomes existem no array e imprima o resultado no console
console.log(nomes.length)

// Pegue os nomes do segundo ao quarto elementos do array e imprima-os no console
console.log(nomes.slice(1, 5))


// utilizando template strings.:
const myName = 'Guilherme P'
console.log(`Olá, ${myName}!`);

// utilizando aspas simples.: 
console.log('Olá, ' + myName + '!');