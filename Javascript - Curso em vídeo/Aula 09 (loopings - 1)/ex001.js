/* 
Quando queremos fazer uma repetição simples, podemos utilizar o "while". 
Invés de digitarmos console.log('Tudo bem?') diversas vezes, podemos simplesmente dizer: 
"ENQUANTO 'A' for menor do que 10, o bloco abaixo será executado".
*/


/* 
Jeito "errado": 
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
..
*/


// Dois jeitos mais adequados:

// Estrutura de repetição com teste lógico no inicio:
// Ou seja, primeiro ele analisa o teste lógico e depois executa o bloco.
var a = 0
while (a < 10 ){    
    console.log('Tudo bem?')
    A += 1      
                    
}


// Estrutura de repetição com teste lógico no final:
// Ou seja, primeiro ele irá executar o bloco e depois analisar o teste lógico 
var B = 0
do {
    console.log('Tudo bem?')
    B ++ 
} while (B < 10)