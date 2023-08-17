const t = []
function createArray(n){
    while(n > 0){
        t.push(n)
        n--
    } 
}
createArray(200)


for(let i of t.reverse()){
    console.log(i)
}
