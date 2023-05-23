# Coisas importantes

</br>

## Ambientes diferentes
Quando estamos trabalhando com o front-end, é normal utilizarmos alguns comandos, como o `window.alert`, `window.prompt` e entre outros.. Mas vale lembrar que estes comandos foram feitos para serem rodados pelo browser. O `window.alert()` por exemplo, interage diretamente com o navegador e o ambiente do usuário, o que significa que ele não está disponível em outros contextos, como o Node.js. </br>
Portanto, é importante estar ciente das limitações do uso de métodos específicos do navegador no contexto do Node.js ou outros ambientes.

</br>

## Alterando valores internos do valor da constante
Todos sabemos que, a partir do momento que definimos uma variável usando `const` seu valor _não_ poderá ser alterado. </br>
Porém, existe uma diferença entre variável e valor. Variáveis são como apelidos para um valor, como se fosse uma pequena caixa, e se a caixa se chama "nome", esta caixa possivelmente armazena um nome. </br>
Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (todos os primitivos são imutáveis). Outros tipos são mutáveis, como arrays e objetos 
</br> 
Valores mutáveis são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Não podemos fazer isto pois constantes não permitem reatribuições diretas e de valores primitivos:
```js
const pessoa = "Flora";
pessoa = "Julia"; 
```

Por outro lado, podemos fazer isto pois em nenhum momento nós reatribuimos o valor desta constante. O que foi feito foi a alteração de um VALOR INTERNO do valor original.
Neste caso, o valor interno é o elemento flora (indice 1), e o valor original é um objeto Array.
```js
const pessoas = ['Julia', 'Flora', 'Pablo'];
pessoas[1] = 'Amanda';
```
</br>
Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.
