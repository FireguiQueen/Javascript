# O que são "Operadores" e "operandos"                                
```js

// Operadores:
São os sinais para fazer uma soma, uma divisão e etc.. 

+    (adição)
-    (subtração)
*    (multiplicação)
/    (divisão real, uma divisão onde pode contar vírgula como resultado)
%    (divisão inteira, é o resto da divisão e não pode haver vírgula no resultado
**   (potência)



// Operandos: 
São aqueles que vão fazer os operadores funcionarem.
-2   -1    0   1,3    2 (os números)

5+2 =  7       (adição)
5-2 =  3       (subtração)
5*2 =  10      (multiplicação)
5/2 =  2.5     (divisão real, ou seja, uma divisão que pode levar a vírgula)
5%2 =  1       (divisão inteira, ou seja, o resultado será o número o resto da divisão)
5**2 = 25      (potência, ou seja, o número vezes ele mesmo) 



// Operadores binários: 
São aqueles que precisam de 2 operandos para funcionar. Por exemplo: 5+5, 5-5, 4/2


//Operadores Relacionais:
    >        (maior)
    <        (menor)
    >=       (maior ou igual)
    <=       (menor ou igual)
    ==       (igual)
    !=       (diferente)

Para toda a expressão que possuir um operador relacional, o resultado será um valor boleano, ou seja, TRUE OU FALSE:
5 > 2        TRUE
7 < 4        FALSE
8 >= 8       TRUE
9 <= 7       FALSE
5 == 5       TRUE
4 != 4       FALSE 

Veja a expressão abaixo: 
var a = 10 
var b = '10' 

a == b
Resultado: True 

a === b 
Resultado: False

O que acabamos de ver foi o seguinte: 
O operador == analisa apenas o VALOR e não o FORMATO.
Note que a variável 'a' está no formato "NUMBER" enquanto a variável 'b' está no formato "STRING" 
Caso queira fazer uma comparação completa, analisando o VALOR e o FORMATO, utilize ===
>>>>>>>>>>><<<<<<<<<< 
var a = 10 
var b = '10'

a != b     // FALSE, pois possuem valores iguais, logo, são diferentes

a !== b    // TRUE, pois são FORMATOS diferentes, logo, são diferentes mesmo possuindo VALORES iguais
// Lembre que o operador != é de diferença, 
// Então se haver diferença = true
// Se não haver diferença = false




// Operadores lógicos: 
!       Negação      ( não )
&&      Conjunção    ( com )
||      Disjunção    ( ou  )

var a = 10 
var b = 20
var c = 5 

b > a   &&   a < c 
Resultado: TRUE  
(pois ambos os lados são verdadeiros, caso um lado não fosse TRUE, o resultado seria FALSE) 

a > b    ||    b>c
Resultado: TRUE       
(pois um dos lados é verdadeiro, só precisa de apenas um lado para o resultado ser TRUE)



// Auto-atribuições:
Var number = 3
number = number + 4    (3+4, pois 3 é o valor desta variável)
number = 7


// Simplificando:
var Number = 3
number += 4

Basicamente, estamos dizendo que a váriavel "Number" receberá "Number + 4", totalizando 7.
Isto só funciona se a mesma variável: RECEBER ELA MESMA + algum_número
Mas claro, também podemos usar outros operadores: 
Number **= 4 
Agora a variável "Number", recebe 81

































Cuidado com a PRECEDÊNCIA (ordem de como é feito o cálculo usando os operadores):

5 + 3/2 = 6.5
O resultado acima não é 4, pois devemos seguir com a precedência, ou seja, primeiro fazemos os operadores que estão em primeiro na PRECEDÊNCIA.

Mas como fazer com que 5 + 3 / 2 resulte em 4? Simples, basta usar os parênteses.
Com o parênteses, estamos dizendo que, o que estiver dentro dele, será feito primeiro. 
(5+3) /2 = 4 

A ORDEM DA PRECEDÊNCIA É:
1º.     ()                             // parênteses            
2º.     **                             // potência 
3º.     *      /      %                // multiplicação, divisão real e divisão inteira               OBS: Os 3 operados possuem a mesma ordem.   
4º.     +    -                         // adição e subtração                                          OBS: Ambos os operadores possouem a mesma ordem.

NOTE: Caso haja operadores que possuem a mesma ordem, faça a conta da esquerda para direita:  (SIGA A PRECÊDENCIA, E DEPOIS SIGA DA ESQUERDA PARA DIREITA)
1 + 2 - 2 / 2 
resultado: 2