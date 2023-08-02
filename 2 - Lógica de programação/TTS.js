const data = new Date();

const config = {
    hour12: 'false'
}
console.log(data.toLocaleTimeString('pt-br', config))