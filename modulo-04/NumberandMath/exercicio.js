// Retorne um número aleatório
// entre 1050 e 2000

const randomN = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)

console.log(randomN);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(',').map(numero => {
  return parseInt(numero.trim())
})
console.log(Math.max(...numerosArray));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'
];

function somaTotal(precos) {
  const precoNumber = precos.map(preco => +parseFloat(preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim()).toFixed(2));
  
  return precoNumber.reduce((total, valor) => {
    total += valor
    return total
  }, 0).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
}

console.log(somaTotal(listaPrecos));