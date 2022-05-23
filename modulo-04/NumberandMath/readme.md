# Modulo 04

```javascript
/* Retorna boolean, da comparação se a variável é Not a number ou não */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
```

```javascript
/* Retorna boolean, da comparação se a variável é inteira ou não */
console.log(Number.isInteger(20));
```

```javascript
/* Retorna a conversão de uma string para float
 * Só pode com (.)
 */
let stringToFloat = Number.parseFloat('ss4541');
console.log(`StringToFloat é, isNaN == ${isNaN(stringToFloat)}`);
stringToFloat = Number.parseFloat('4541ss');
console.log(`StringToFloat é, isNaN == ${isNaN(stringToFloat)}`);
```

```javascript
let preco = 59.49;

/*
 * Formata um número, com o padrão do pais escolhido.
 */
preco = preco.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

console.log(preco);
```

```javascript
/*
 * Retorna um número randomico de 0 a 1.
 * Pode se multiplicar ele pelo limite que você quer usar
 * Math.random() * 10 de 0 a 10
 * Math.random() * 10 de 0 a 100
 */
const aleatorio = Math.random() * 100;
console.log(aleatorio);

/* Número random entre uma área */
Math.floor(Math.random() * (max - min + 1)) + min;
```

```javascript
// Cria uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorna a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function somaTotal(precos) {
  const precoNumber = precos.map(
    (preco) =>
      +parseFloat(
        preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim(),
      ).toFixed(2),
  );

  return precoNumber
    .reduce((total, valor) => {
      total += valor;
      return total;
    }, 0)
    .toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    });
}

console.log(somaTotal(listaPrecos));
```
