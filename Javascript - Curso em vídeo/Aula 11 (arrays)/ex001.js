var números = [99999, 9, 99, 999, 9999]
console.log(`Números sem ordem: ${números} (terceiro indice: ${números[3]})`)
console.log('-----------------------------------------------------------------------------------')
console.log(`Números com ordem: ${números.sort()} (terceiro indice: ${números[3]})`)

for (indice = 0; indice < números.length; indice++){
    console.log(`A posição ${indice} tem o valor ${números[indice]}`)
}
 // OU 

 for (var pos in num){
    console.log(`A posição ${indice} tem o valor ${números[indice]}`)

}