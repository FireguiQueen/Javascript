# Tipos de janelas

## Window alert
Janela de alerta nos browsers.
Serve para alertar algo

```js 
// Podemos usar string
window.alert('Seu alerta aqui');

// E variável
var alerta = 'Seu alerta aqui'
window.alert(alerta);
```

</br>
</br>
</br>

## Window confirm 
Janela de confirmação nos browsers
Atualmente não muito utilizada, mas pode fazer com que ela surja para o cliente confirmar algo

```js
// Podemos usar string
window.confirm();

// E variável
var confirmacao = 'Você deseja concordar com as regras da empresa? Clique "OK" para continuar'
window.alert(comunicacao);
```

</br>
</br>
</br>

## Window prompt
Janela de prompt
Atualmente não muito utilizada, mas pode fazer com que o usuário se "comunique", pois ele pode digitar neste janela

```js
// Podemos usar string
window.prompt('Escreva seu nome.:');

// E variável
var pergunta = 'Escreva seu nome.:'
window.prompt(pergunta);
```


# Comentários no JS 
Para se fazer é bem simples, e existem duas formas.

```js
// Comentário de apenas uma única linha..
// Com ele você não pode escrever mais de uma linha, será necessário usar "//" para cada linha
```

```js
/* Comentário de várias linhas
você pode escrever quantas linhas quiser
até fechar o comentário
*/
```