// Com base no array abaixo, indique o indice de cada fruta.
const fruit_list = ['Banana', 'Manga', 'Goiaba', 'Blue Barry', 'Morango']
for(let i = 0; i < fruit_list.length; i++){
    console.log(`${i} - ${fruit_list[i]}`)
}

// Printe de -10 até 5
for(let i = -10; i <= 5; i++){
    console.log(i)
}


// Com base no array abaixo, determine se o elemento é par ou ímpar
const numeros = [0, 23, 52, 56, 73, 82, 91, 107, 143, 167];
for(let i = 0; i < numeros.length; i++){
    console.log(`${numeros[i] % 2 }`)
}