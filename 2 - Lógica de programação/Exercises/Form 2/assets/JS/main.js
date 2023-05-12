const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('teste')
    const pessoaAltura = document.querySelector('#altura').value;
    const pessoaPeso = document.querySelector('#peso').value;



    // KG / altura² (em metros)
    const calcIMC = pessoaPeso / (pessoaAltura**2)  

    // maneira burra e não prática.:
    if(calcIMC < 18.5){
        return 'abaixo'
    } else if(calcIMC >= 18.5 && calcIMC <= 24.9){
        return 'normal'
    } else if(calcIMC >=25 && calcIMC <= 29.9){
        return 'sobrepeso'
    } else if(calcIMC >=30 && calcIMC <= 34.9){
        return 'obesidadeI'
    } else if(calcIMC >=35 && calcIMC <= 39.9){
        return 'obesidadeII'
    }  else{
        return 'obesidadeIII'
    }

    // limpar os valores colocados nos inputs de peso & altura
    const inputInf = document.querySelectorAll('input[type=number]');
    inputInf.forEach(e => e.value = '');

})