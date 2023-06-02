const pessoasNoBarco = 10;
if(pessoasNoBarco > 10) console.log('Há mais de 10 pessoas no barco')
else console.log('Há 10 pessoas ou menos no barco');


function howManyPeople(num){
    if(num > 10)
        return 'Há mais de 10 pessoas'
    if(num > 100)
        return 'Há mais de 100 pessoas'
    else 
        return 'Há 10 pessoas ou menos'
}
console.log(howManyPeople(100));