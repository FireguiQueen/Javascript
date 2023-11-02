##  FORMAS DE PEGAR UM ELEMENTO: 
<script>
    document.getElementById('')                             //   Pegar um elemento pelo seu ID 
    document.getElementsByName('')[]                        //   Pegar um elemento pelo seu NOME 
    document.getElementsByClassName('')[]                   //   Pegar um elemento pelo nome de sua CLASSE 
    document.getElementsByTagName('')[]                     //   Pegar um elemento pelo nome de sua TAG      ( <p> </p>    ,    <div> </div>   ,   <h1> </h1> )
    document.querySelector('')                              //   Pegar um elemento pelo seu seletor no CSS   (identificamos qual TAG iremos pegar e qual id)
</script>
_______________________________________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________________________________


#   PEGANDO UM ELEMENTO PELA SUA ID:

<p id="vibes"> Isto é um paragráfo </p>
<script>
var paragráfo = window.document.getElementsById('vibes')
    //      Dentro do parênteses, estamos especificando qual ID iremos pegar.
    //      Não é colocado os colchetes, pois ID é algo único, cada TAG irá possuir um ID diferente!

_______________________________________________________________________________________________________________________________________________________________

#   PEGANDO UM ELEMENTO PELO SEU NAME: 

<h1 name='4lan'> Primeiro título </h1>
<h1 name='4lan'> Segundo título </h1>
<script>
var título = window.document.getElementsByName('nome')[0]
    //      Dentro do parênteses, estamos especificando qual NAME iremos pegar. Como o '4lan' está nos parênteses, os títulos que contem '4lan' serão pegos.
    //      Dentro dos colchetes, estamos especificando qual título iremos pegar, afinal, existem dois NAMES para títulos diferentes.

_______________________________________________________________________________________________________________________________________________________________

#   PEGANDO UM ELEMENTO PELA SUA CLASS: 

<p class='vibes'> Este é o primeiro paragráfo da página </p>
<p class='vibes'> Este é o segundo paragráfo da página </p>
<script>
var paragráfo = window.document.getElementsByClassName('vibes')[0]
    //      Dentro do parênteses, estamos especificando qual CLASS iremos pegar. Como o 'vibes' está nos parênteses, a CLASS que contém o paragráfo será pega.
    //      Dentro dos colchetes, estamos especificando qual paragráfo iremos pegar, afinal, existem duas CLASS paragráfos diferentes.
</script>

_______________________________________________________________________________________________________________________________________________________________

#   PEGANDO UM ELEMENTO PELA SUA TAG:

<p> Isto é um paragráfo </p>
<p> Este é outro paragráfo </p>
<script>
var paragráfo = window.document.getElementsByTagName('p')[0]
    //      Dentro do parênteses, estamos especificando qual TAG iremos pegar. Como o 'p' está nos parênteses, a TAG do paragráfo será pega.
    //      Dentro dos colchetes, estamos especificando qual das 2 TAGS iremos pegar, afinal, existem duas TAGS de paragráfo.
    //      Como o número dentro dos colchetes é "0", o primeiro paragráfo será pego. E caso o número dos colchetes fosse "1", o segundo paragráfo seria pego. 

_______________________________________________________________________________________________________________________________________________________________

#   PEGANDO UM ELEMENTO USANDO: querySelector('')

<p id='vibes'> Este é o primeiro paragráfo </p>
<p class='vibes'> Este é o segundo paragráfo </p>
<script>
var paragráfo2 = document.querySelector('p#vibes')
    //      Dentro do parênteses, precisamos informar a TAG e sua ID. 
    //      É necessário usar a # para especificarmos se é uma ID ou uma CLASS, como estamos usando ID, usaremos a #

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


<script>
var paragráfo1 = document.querySelector('p.vibes')
    //      Dentro do parênteses, precisamos informar a TAG e sua CLASS.
    //      É necessário usar o . para especificarmos se é uma ID ou uma CLASS, como estamos usando a CLASS, usaremos o .        (ponto final)
     


