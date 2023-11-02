# O que são "CONDIÇÕES"? 
```js

// Uma condição é uma forma do código rodar de maneira mais prática e rápida, pois com a resposta do usuário, determinada condição será ativa e um bloco será rodado. 

Por exemplo:
          Você gosta de bananas? Sim ou Não
          ---------Resposta aqui-----------
          |                               |
        Sim                               Não       
  Bacana, eu também                  Poxa, por que não?
                    



O que vimos acima, foi uma estrutura básica para uma condição entre "Se" e "Se não" 
Se o usuário responder "sim" a resposta será "Bacana, eu também"  
Se o usuário repsonder "não" a resposta será "Poxa, por que não?"



# Condições simples: 
                                                       
var idade = 18                                          :
if (idade > 18){                                        :
     console.log('Você é maior do que 18 anos.')        :       
     }                                                

// Uma condição simples é uma condição que nos devolve apenas uma resposta caso o resultado seja TRUE.
Por exemplo - A idade é maior do que 18, logo irá aparecer "Você é maior do que 18". 
Mas não irá aparecer nada caso a idade seja manor do que 18.



# Condições compostas:

var idade = 18                                         :
if (idade > 18){                                       :
     cosole.log('Você é maior do que 18 anos.')        :
     } else {                                          :
     console.log('Você é menor do que 18 anos.')       :
     }                                                 

// Uma condição composta é uma condição que nos devolve uma resposta caso o resultado seja FALSE. 
Por exemplo: A idade não é maior do que 18, logo é FALSE, então iremos pro ELSE.