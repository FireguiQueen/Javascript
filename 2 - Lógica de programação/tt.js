const ano_alterado = new Date('2023-07-31T03:00:00')
console.log(ano_alterado.getTime());

const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

const data = new Date('2020-12-03T12:03:10');
console.log(data.toLocaleDateString('PT-BR', options))