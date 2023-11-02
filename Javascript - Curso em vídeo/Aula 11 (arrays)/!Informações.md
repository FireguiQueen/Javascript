# QUAL A DIFERENÇA ENTRE UMA VARIÁVEL COMPOSTA E UMA VARIÁVEL SIMPLES? 
<script>

As variáveis simples só podem armazenar um único valor por vez. 
Ou seja, caso queiramos atribuir outro valor a uma mesma variável, o valor será trocado:
var phrase = 'Hello World!'
var phrase = 'Vibes!'
console.log(phrase);
Resultado: Vibes!


Já as variáveis compostas, conseguem armazenar vários valores em uma única estrutura.
var carros = ['Mercedes', 'Cybertruck', 'BMW', 'tesla']

<!--           ------------------------------------------------------------------------------------                      -->

>>Entendo uma ARRAY: 
- Uma array nada mais é do que uma variável composta, ou seja, uma váriavel capaz de armazenar vários valores.
- Os valores que uma array recebe são chamados de "elementos".
- Cada elemento é composto pelo seu valor e por um indíce. 

Por exemplo: 
   var names = ['Nicole', 'Julia', 'Larissa'] <-- Elementos 
                   ----------------------
                      valores e indíces

Como o nome "Nicole" está como o primeiro elemento da Array, o seu indice é o número ZERO. 
Não começamos pelo indíce 1, e sim pelo 0.
   Indíce 0: Nícole
   Indíce 1: Julia
   Indíce 2: Larissa 
</script>
<!------------------------------------------------------------------------------------------------------------------------->
# MOSTRANDO UM INDÍCE ESPECÍFICO: 
```js

var subjects = ['Science', 'Math', 'English', 'Portuguese']
console.log(subjetcs[0]) // Para pegarmos um indíce específico, abrimos colchetes e colocamos qual indíce queremos.
Resultado: 'Science' 
```
<!------------------------------------------------------------------------------------------------------------------------->
# ACRESCENTANDO UM VALOR:                    
```js                                                                                                                                                                         
var nu = ['0', '7', '2']
nu[2] = 6  // Estamos dizendo que, no INDÍCE 3, será colocado o valor 6. 
nu.push(7) 


RESULTADO: 
console.log(nu);
[0, 7, 6, 7] 
```
<!------------------------------------------------------------------------------------------------------------------------->
# DESCOBRINDO O COMPRIMENTO DE UM ARRAY: (QUANTOS ELEMENTOS/INDÍCES HÁ NELA)
```js

var lista_nomes = ['Guilherme','Julia', 'Paula', 'Jéssica']
console.log(lista_nomes.length)

Resultado: 4 elementos  (3 indíces) 
// O resultado foi quatro pois há QUATRO elementos. 
// Há 3 indíces pois o primeiro elemento é o 0. Então temos:
Indíce 0: Guilherme 
Indíce 1: Julia
Indíce 2: Paula
Indíce 3: Jéssica
```
<!------------------------------------------------------------------------------------------------------------------------->
# ORGANIZANDO VALORES: 
```js

var numbers = [9999, 999, 99, 9]
console.log(numbers.sort()) 
// A palavra SORT significa "organizar"
// Estamos mandando a váriavel NUMBERS ser ORGANIZADA (de ordem crescente). 

Resultado: 9, 99, 999, 9999
```
<!------------------------------------------------------------------------------------------------------------------------->
# PROCURANDO VALORES: 
```js

var números = [0, 5, 3, 12]
console.log(números.indexOf(3)) 
// Index significa indíce, ou seja, estamos pedindo o indíce do valor que está entre parenteses 

Resultado: 2 (pois o valor 3 está no indíce 2)

</script>
_____________________________________________________________________________________________________________________________________________________________________