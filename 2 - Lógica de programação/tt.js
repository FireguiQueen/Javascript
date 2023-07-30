const data = new Date(2020,0);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric'}
console.log(data.toLocaleDateString('pt-br', options))