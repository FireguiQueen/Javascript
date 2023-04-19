# Coisas importantes

</br>

## Ambientes diferentes
Quando estamos trabalhando com o front-end, é normal utilizarmos alguns comandos, como o `window.alert`, `window.prompt` e entre outros.. Mas vale lembrar que estes comandos foram feitos para serem rodados pelo browser. O `window.alert()` por exemplo, interage diretamente com o navegador e o ambiente do usuário, o que significa que ele não está disponível em outros contextos, como o Node.js. </br>
Portanto, é importante estar ciente das limitações do uso de métodos específicos do navegador no contexto do Node.js ou outros ambientes.

</br>

## Constantes e sua imutalidade
Todos sabemos que, a partir do momento que definimos uma variável usando `const` seu valor _não_ poderá ser alterado. </br>
Mas há um porém.