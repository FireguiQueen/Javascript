let x = 0
function digaOi(){
    if(x >= 10) return
    x++
    console.log(`${x} - oi`)
    digaOi()
}
digaOi()