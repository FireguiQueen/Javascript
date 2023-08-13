let x = 30000000000000000
let mee = []
while(x > 0){
    x -= 40000000000000
    let i = Math.random() * (5100 - 2000) + 2000;
    if(i === 5000 || i >= 5000){
        mee.push(i);
        continue;
    }
}

console.log(mee)