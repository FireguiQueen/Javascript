# Date
- Nada mais é do que uma função construtora;
- Por ser uma função construtora, usaremos o 'new' e criaremos uma variável;
- Facilita trabalharmos com datas; 

## Entendendo os parâmetros
Os parâmetros deste objeto seguem esta ordem.:
<ol>
    <li>Year </li>
    <li>Month </li>
    <li>Day </li>
    <li>Hour </li>
    <li>Minutes </li>
    <li>Seconds </li>
    <li>Milliseconds </li>
</ol>

## Observações
Caso você deseja definir sua própria data, saiba que apenas o _ano_ e o _mês_ são obrigatórios, o restante você não precisa colocar. 
</br>

Como já sabemos, todo primeiro elemento de um array é representado pelo indíce 0, e não é diferente quando fazemos uso do `Date()`.
O mês segue esta mesma ordem. Isto significa que, o mês de janeiro é representado pelo número 0, o mês de fevereiro é representado pelo mês 1, e assim por diante..
</br>


</br>
</br>

## Alterando a data usando `Number`
```js
const data_com_ano_alterado = new Date(2020, 3)
console.log(data_com_ano_alterado);
// Como os outros parâmetros não foram definiso, o dia será 1, as horas serão 3, e o restante será 0.
// output: 2020, april, 1, 3, 00, 00, 00
```

## Alterando a data usando `String`
```js
// Temos a opção de digitar assim.:
let data_com_ano_alterado = new Date('2023-06-06 22:32:21');

// Ou assim (sem o espaço entre o ano e a data, usando o caractere 'T').
data_com_ano_alterado = new Date('2023-06-06T22:32:21');

console.log(data_com_ano_alterado);
// output: 
```


</br>
</br>

__________________________________________________

