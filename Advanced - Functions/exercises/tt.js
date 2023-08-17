function* oi(banido, unban = 'n'){
    banido === 'y'? yield 'Você está banido!' : ''
    unban === 'y'?  yield 'Você está desbanido' : yield 'você não está desbanido'
}

console.log(oi('y').next(''))
console.log(oi().next(''))