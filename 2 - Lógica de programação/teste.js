let segundo = 0;
const data = new Date()
setInterval(function(){
    segundo++
    console.log(new Date(segundo * 1000))
}, 1000)