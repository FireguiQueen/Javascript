// function whatToDo(parOrImpar, n){
//     const numbers = [];

//     if(parOrImpar === 'onlyPar'){
//         for(let i of n){
//             if(i % 2 === 0){
//                 numbers.push(i)
//                 continue;
//             }
//         }
//         return numbers.sort();
//     }

//     if(parOrImpar === 'onlyImpar'){
//         for(let i of n){
//             if(i % 2 !== 0){
//                 numbers.push(i)
//                 continue;
//             }
//         }
//         return numbers.sort();
//     }
// }

// function parImpar(which, ...numbers){
//     return whatToDo(which, numbers)
// }

// console.log(parImpar('onlyImpar', 222, 10, 5))

function somar(){
    let x = 0;

    function incrementar(){
        x++
        return x
    } 

    return incrementar  
}

const somarX = somar()
console.log(somarX())
console.log(somarX())