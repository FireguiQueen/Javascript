# Variáveis

## Importância
Todas as linguagens de programação possuem variáveis. Ela nos permite armazenar valores na memória do computador e podem ser usadas posteriormente pelo programa. Usando variáveis iremos repetir menos códigos e assim teremos um código mais limpo e eficiente. </br>
Por exemplo, em vez de repetir o valor "10" várias vezes em um programa, você pode atribuir esse valor a uma variável e usá-la sempre que precisar desse valor. Se o valor precisar ser alterado posteriormente, você pode simplesmente mudar o valor da variável, em vez de ter que encontrar e alterar todas as ocorrências do valor no código. </br>
As variáveis também são importantes porque _permitem que os programas interajam com o usuário_ ou com outros sistemas, armazenando e processando dados de entrada e saída.

</br>

## Identificadores
Os identificadores são os nomes das variáveis. No exemplo abaixo, o nosso identificador é a palavra "pessoa".  
```js
let pessoa = "Pablo";
```
Os identificadores devem possuir significado, e possuem regras para serem escritos, sendo elas.: 
* Nomes não podem ser palavras reservadas
* Espaços em branco não são permitidos
* O primeiro caractere deve ser uma letra ou underscore (_)
* Identificadores só podem possuir letras, números ou underscores (_)

</br>
</br>

## Declarando variáveis
Para se declarar (criar) variáveis é muito simples. Seguimos esta ordem?
> keyword (seja ele const, var ou let) identificador (nome para a variável) sinal de atribuição (conhecido popularmente como 'sinal de igual') valor (valor que esta variável recebe)
```js
var pessoa = 'Julia';

let carro = 'Tesla';

const animalEstimacao = 'Bolinha';
```
Vale lembrar que também podemos declarar uma variável sem valor, e depois podemos fazer uma reatribuição, adicionado um valor a ela.
```js
let pessoa;
pessoa = 'João';
```
Mas isto só funciona com `var` e `let`, pois com `const` __não__ podemos reatribuir valores primitivos.

</br>
</br>

## Reatribuindo valores
Como o próprio nome já diz, variáveis variam, ou seja, seus valores podem mudar. </br>
Com excessão da "const", onde o dado armazenado não pode ser alterado (apenas valores internos do dado armazenado, como por exemplo valores de um array, esses podem ser alterados, mesmo estando em uma const). </br>

* Reatribuindo o valor
```js
let nome = "Pablo";
console.log(nome); // output: Pablo

// Reatribuindo o valor da variável.: 
nome = "Julia";
console.log(nome); // output: Julia
```

* Maneira incorreta (declarar novamente a variável)
```js
let numero = 10;
console.log(numero); // output: 10

// Jamais poderemos fazer da maneira abaixo, pois estamos DECLARANDO NOVAMENTE a variável, e não reatribuindo o valor.
let numero = 5;
console.log(numero) // output: ERROR;
```
</br>

________________________________________________________

## Let, const & e var
São os três tipos de variáveis da linguagem javascript. 
Cada uma possui sua diferença e importância, mas em geral devemos __EVITAR__ o uso de `var`

</br>

### Let & var: Diferenças básicas
Quando estamos utilizando `var`, podemos declarar a variável diversas vezes, e coloque enfâse no "declarar", pois no código abaixo, nós não estamos reatribuindo valores, e sim DECLARANDO a variável divesas vezes.:
```js
var pessoa = "Pablo";
var pessoa = "Julia"; 
var pessoa = "Otávio";
console.log(pessoa);    // output: Otávio;
```
Mas lembrando que, o que foi feito acima __não__ é uma boa prática e não faz o menor sentido fazer isto. O que foi feito acima seria impossível de fazer usando "let", pois com o `LET` um identificador __não__ pode ser declarado mais de uma vez.
```js
let carro = "Tesla X";
let carro = "Fiat Uno"; // output: o identificador 'carro' já foi declarado.  
```
Em suma, podemos declarar o mesmo identificador infinitas vezes quando utilizamos _var_, mas quando usamos _let_, podemos declarar o identificador apenas uma vez. 
Vale ressaltar que _declaração_ é diferente de _reatribuição_. Enquanto "redeclarações" podem ser feitas apenas quando usamos var, reatribuições possuem uma extrema importância, e podem tanto ser usadas com `let` tanto quanto `var`. No exemplo abaixo, podemos observar o que é uma reatribuição.:
```js
let pessoa = "Julia";
pessoa = "Flora";
```

### Const
A const é uma variável constante, ou seja, depois que um valor foi atribuido a mesma, ele será imutável, ou seja, o valor não poderá ser reatribuido.
Diferente da variável `let`, nós não podemos declarar uma `const` sem inicializar ela, ou seja, fazer com que ela receba um valor. Fazer isto resultará em erro, pois como já foi dito anteriormente, variáveis constantes não podem ter seus valores reatribuidos. 
```js
const myEmail; // Isto resultará em erro.
myEmail = 'fireguiquenbr@gmail.com';
```
No entanto, é importante notar que, embora uma constante não possa ser reatribuída, se o valor atribuído a ela for um objeto ou um array, as propriedades e elementos desse objeto ou array podem ser modificados, afinal NÃO estamos alterando o valor original da constante, e sim um valor do valor original.


