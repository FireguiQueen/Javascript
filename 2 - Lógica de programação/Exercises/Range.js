/*
Crie uma função que possua um parâmetro, e determine o range deste número atráves de um argumento.
*/


function determinarRange(num){
    if(num < 0){
        return 'Seu número é negativo.'
    } else if(num >= 0 && num <= 10){
        return 'Seu número está entre 0 e 10.'
    } else if(num > 10 && num <= 20){
        return 'Seu número está entre 10 e 20'
    } else if(num > 20 && num <= 50){
        return 'Seu número está entre 20 e 50'
    } else{
        return 'Seu número está entre 50 até o infinito..'
    }
}
console.log(determinarRange(235235));