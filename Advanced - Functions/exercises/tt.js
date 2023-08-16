let i = 0;
function digaOi(){
    if(i > 11293) return;
    console.log(`Ois ditos: ${i}`)
    i++
    digaOi()
}
digaOi()