# Aritiméticos
* _adição/concatenação:_ +
* _subtração:_-   
* _multiplicação:_ *
* _divisão:_ /
* _potência:_ **
* _resto da divisão:_ %

Acima, estamos dizendo que o operador "+" serve para adição e concatenação.
Isto porque este operador pode somar mas também pode unir valores para uma string. Por exemplo:
```js
// Usando para adição
const num1 = 10;
const num2 = 20;
console.log(num1 + num2);

// Usando para concatenação
const idade = 50;
const pessoa = 'Maria';
console.log(pessoa + ' tem ' + idade + ' anos' );
```

</br>

________________________________________________________________________


## Operadores: incremento & decremento
Utilizamos do "++" quando precisamos somar "+1" ao nosso valor. O "--" é quando precisamos diminuir "-1" do nosso valor. </br>
O "++" é como se fosse "some mais um" e "--" é como se fosse "menos um".. Veja no exemplo abaixo.:
```js
let saldo = 100 
sado++ 
consooe.log(saldo) // output: 101 
```

Podemos colocar este operador tanto na frente quanto atrás de um valor.
```js
let saldo = 100

saldo++ 
// ou
++saldo
```

A diferença está na ordem de como será executado.
Por exemplo, se colocarmos o "++" antes do valor, estamos dizendo que já será incrementado o "+1" ao nosso valor. Se colocarmos o "++" depois do valor, primeiro será mostrado o valor e depois será adicionado +1.

Em geral, isto fará pouca diferença. Mas podemos ver esta diferença usando o `console.log`
```js
let numero = 1
console.log(numero++); // output: 1
console.log(numero);   // output: 2
```
Como já foi dito, isto ocorre justamente porque primeiro o valor é exibido e DEPOIS é incrementado +1 ao seu valor.

</br>

### E quando precisamos somar/diminuir um número além de 1?
Vamos supor que você possua uma conta bancária, e o saldo atual dela é de R$44.000,00  </br>
Porém, uma pessoa faz uma transfêrencia a você, no valor de R$5.000
Sendo assim, precisamos somar o seu saldo ATUAL + valor da transferência (para sabermos o saldo final). Temos dois jeitos de fazer isto.:

```js
// Jeito não prático
let contaBancaria = 44100;
const saldoTotal = contaBancaria + 5000;


// Jeito prático
let contaBancaria = 44100; 
contaBancaria += 5000; // seria equivalente ao digitar: contaBancaria = contaBancaria + 5000;
```
Perceba que o segundo método ficou bem mais simples e limpo. Isto porque, podemos usar um operador _antes_ do operador de atribuição (=). Quando fazemos isto, estamos dizendo que será o valor próprio da variável + outro valor. </br>

Isto também funciona com outros operadores.:
```js
let contaBancaria = 25000; 
contaBancaria *= 2; // seria equivalente ao digitar: contaBancaria = contaBancaria * 2

console.log(contaBancaria); // output: 50.000
```