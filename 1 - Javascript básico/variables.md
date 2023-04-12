# Variáveis

## Importância
Todas as linguagens de programação possuem variáveis. Ela nos permite armazenar valores na memória do computador e podem ser usadas posteriormente pelo programa. Usando variáveis iremos repetir menos códigos e assim teremos um código mais limpo e eficiente. </br>
Por exemplo, em vez de repetir o valor "10" várias vezes em um programa, você pode atribuir esse valor a uma variável e usá-la sempre que precisar desse valor. Se o valor precisar ser alterado posteriormente, você pode simplesmente mudar o valor da variável, em vez de ter que encontrar e alterar todas as ocorrências do valor no código. </br>
As variáveis também são importantes porque _permitem que os programas interajam com o usuário_ ou com outros sistemas, armazenando e processando dados de entrada e saída.

</br>
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

## Reatribuindo valores
Como o próprio nome já diz, variáveis variam, ou seja, seus valores podem mudar. </br>
Com excessão da "const", onde o dado armazenado não pode ser alterado. </br>

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
</br>

## Let, const & e var
São os três tipos de variáveis da linguagem javascript. 
Cada uma possui sua diferença e importância, mas em geral devemos __EVITAR__ o uso de `var`

### Const
A const é uma variável constante, ou seja, depois que um valor foi atribuido a mesma, ele será imutável, ou seja, o valor não poderá ser reatribuido.
