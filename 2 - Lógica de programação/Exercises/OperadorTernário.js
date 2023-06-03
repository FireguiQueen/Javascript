// Crie códigos usando o operador ternário '?' para substituir as estruturas condicionais abaixo.:

// Objeto base
const pessoa_01 = {
    name: 'Otávio',
    idade: 24,
    country: 'Brazil'
}

// Substitua esta estrutura condicional.:
    if(pessoa_01.idade >= 18){
        console.log('Você é de maior.')
    } else{
        console.log('Você é de menor.')
    }

// Resposta.:
console.log(pessoa_01 >= 18? 'Você é de maior.' : 'Você é de menor.')





// Substitua esta estrutura.:
    if(pessoa_01.idade >= 18 && pessoa_01.country.toLowerCase() === 'brazil'){
        console.log('Você pode vir a festa.')
    } else{
        console.log('Você não pode vir a festa.')
    }

// Resposta.:
const checkAgeAndCountry = (pessoa_01.idade >= 18) && (pessoa_01.country.toLowerCase() === 'brazil')
console.log(checkAgeAndCountry? 'Você pode vir a festa' : 'Você não pode vir a festa')