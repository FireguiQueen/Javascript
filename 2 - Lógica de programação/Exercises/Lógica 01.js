// Escreva uma função que recebe dois números e retorne o maior deles.
function maxNum(x, y){
    return Math.max(x, y)
}
console.log(maxNum(6,4))

// Escreva uma função que possua dois parâmetros: altura e largura. Retorne true se ela estiver em modo paisagem.
function ePaisagem(height, width){
    return `Está em modo paisagem? ${width < height}`
}
console.log(ePaisagem(1,5))