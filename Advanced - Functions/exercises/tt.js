let i = 20; 
function t(){
    if(i >= 20) return;
    i++
    t()
} t()

console.log(i)
