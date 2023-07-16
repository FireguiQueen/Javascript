// Objeto com os nomes e notas dos estudantes
const notasDosEstudantes = {
    João: 7.8,
    Maria: 9.2,
    Pedro: 6.5,
    Ana: 8.9
  };
  
  // Usando o for...in para percorrer os estudantes e calcular a média
  for (const estudante in notasDosEstudantes) {
    const notas = notasDosEstudantes[estudante];
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log(`${estudante}: Média ${media.toFixed(2)}`);
  }
  