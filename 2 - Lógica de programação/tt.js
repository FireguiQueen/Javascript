const data = new Date('2020-12-03T12:03:10');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
console.log(data.toLocaleDateString('pt-br', options))