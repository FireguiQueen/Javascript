const array = [1,4,5,65,6,7,2]


for(let i of array){
    if(i !== 7){
        console.log('oi')
        continue;
    }
    console.log(i)
    if(i === 7){
        break;
    }
}