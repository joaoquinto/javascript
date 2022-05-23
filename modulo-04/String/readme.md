# Modulo 04

```javascript
console.log(agua[--agua.length]);
console.log(comida[--comida.length]);

/* Método que acessa as strings pelo index de cada caractere */
console.log(comida.charAt([--comida.length]));
```

```javascript
/* Método que concatena strings */
const fraseFinal = comida.concat(` e ${agua}`);
```

```javascript
/* Includes retorna um boolean se houver match de strings
 *  Aceita que informe por onde a procura deve começar, utilizando o index
 */
if (frutas.includes('Banana', 10)) {
  console.log('Banana');
} else {
  console.log('Não tem banana');
}
```

```javascript
/*
 * endsWith & startsWith retorna um boolean se houver match de strings
 * Aceita que informe por onde a procura deve começar, utilizando o index
 */

if (frutas.endsWith('x')) {
  console.log(frutas.length);
} else if (frutas.startsWith('M')) {
  console.log('Aye');
}
```

```javascript
const nome = 'João Victor O. Pereira';

console.log(nome.length);
/*  */
console.log(nome.slice(10, nome.length));

/*
 * Retorna o index do primeiro caractere
 * que der match com o parametro
 */
console.log(nome.indexOf('O'));

/* Caso de uso do indexOf & slice */
const startLastName = nome.indexOf('O');
const endLastName = nome.length;
const lastName = nome.slice(startLastName, endLastName);
```

```javascript
// Utilizando o foreach ou reduce no array abaixo,
// somando os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
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
transacoes.forEach((transacao) => {
  somaTransacao += +transacao.valor.replaceAll('R$ ', '');
});

console.log(`R$${somaTransacao.toFixed(2).replace('.', ',')}`);

const total = transacoes.reduce((acc, cr) => {
  acc += +cr.valor.replaceAll('R$ ', '');
  return acc;
}, 0);

console.log(`R$${total.toFixed(2).replace('.', ',')}`);
```
