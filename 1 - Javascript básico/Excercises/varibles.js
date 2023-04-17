let a = 'a' // b
let b = 'b' // c
let c = 'c' // a

const varA = a
a = b
b = c
c = varA
console.log(a,b,c)