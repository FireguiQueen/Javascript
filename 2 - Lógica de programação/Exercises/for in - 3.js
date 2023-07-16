// Objeto com algumas propriedades
const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
  };
  
  // Usando o for...in para percorrer as propriedades do objeto
  for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }

  



// Função que conta a ocorrência de cada letra em uma string
function contarLetras(str) {
    const contagem = {};
  
    // Usando o for...in para percorrer os caracteres da string
    for (const char in str) {
      const letra = str[char].toLowerCase();
  
      if (letra !== ' ') {
        contagem[letra] = (contagem[letra] || 0) + 1;
      }
    }
  
    return contagem;
  }
  
  const resultado = contarLetras('Hello World');
  console.log(resultado);
  