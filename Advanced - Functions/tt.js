let x = 3000000000
let mee = []
while(x > 0){
    x--
    let i = Math.random() * (5001 - 2000) + 2000;
    if(i === 5000 || i >= 5000){
        mee.push(i);
        continue;
    }
}

console.log(mee)