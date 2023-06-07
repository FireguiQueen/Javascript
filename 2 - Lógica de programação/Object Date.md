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
Logo, o primeiro argumento irá alterar o ano, o segundo irá alterar o mês e assim sucessivamente. 



```js
const data = new Date();
const year = data.getFullYear();
console.log(year);
// output: 2023