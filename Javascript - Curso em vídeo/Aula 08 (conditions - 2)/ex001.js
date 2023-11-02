var idade = 1

if (idade <= 1){
    console.log(`Você tem ${idade} ano de idade`)
} else {
    console.log(`Você tem ${idade} anos.`)
}

if (idade < 16){
    console.log(`Você é menor de 16, você NÃO PODE VOTAR. Mas foda-se o estado`)
} else if (idade < 18 && idade >= 16 || idade >= 65) {
    console.log('Você não é obrigado a votar, mas você pode! Mas foda-se o estado cara..')
} else {
    console.log('Você é obrigado a votar, mas foda-se o estado cara..')
}