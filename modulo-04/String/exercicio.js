// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [{
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTransacao = 0;
transacoes.forEach(transacao => {
  somaTransacao += +transacao.valor.replaceAll('R$ ', '')
})

console.log(`R$${somaTransacao.toFixed(2).replace('.',',')}`);

const total = transacoes.reduce((acc, cr) => {
  acc += +cr.valor.replaceAll('R$ ', '')
  return acc
}, 0)

console.log(`R$${total.toFixed(2).replace('.',',')}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')

console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.charAt(--frase.length));

// Retorne o total de taxas
const transacoeS = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalStringTrasacao = 0;

transacoeS.forEach((transacao, index) => {
  transacoeS[index] = transacao.toLocaleLowerCase().trim().includes("taxa") ? totalStringTrasacao += index++ : totalStringTrasacao += 0;
})

console.log(totalStringTrasacao);