/* Retorna boolean, da comparação se a variável é Not a number ou não */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));

/* Retorna boolean, da comparação se a variável é inteira ou não */
console.log(Number.isInteger(20));

/* Retorna a conversão de uma string para float
 * Só pode com (.)
 */
let stringToFloat = Number.parseFloat("ss4541")
console.log(`StringToFloat é, isNaN == ${isNaN(stringToFloat)}`);
stringToFloat = Number.parseFloat("4541ss")
console.log(`StringToFloat é, isNaN == ${isNaN(stringToFloat)}`);


let preco = 59.49;
console.log(preco);
/* 
 * Formata um número, com o padrão do pais escolhido.
 */
preco = preco.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

console.log(preco);

/* 
 * Retorna um número randomico de 0 a 1.
 * Pode se multiplicar ele pelo limite que você quer usar
 * Math.random() * 10 de 0 a 10
 * Math.random() * 10 de 0 a 100
 */
const aleatorio = Math.random() * 100
console.log(aleatorio);

/* Número random entre uma área */
Math.floor(Math.random() * (max - min + 1)) + min;