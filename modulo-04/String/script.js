const comida = 'Pizza';
/* Criando uma string com o constructor String
 * Retorna um Object
 */
const agua = new String("Agua").toLowerCase();

console.log(agua[--agua.length]);
console.log(comida[--comida.length]);

/* Método que acessa as strings pelo index de cada caractere */
console.log(comida.charAt([--comida.length]));
console.log(comida.charAt(0));

/* Método que concatena strings */
const fraseFinal = comida.concat(` e ${agua}`)

console.log(fraseFinal);

const frutas = 'Melancia, Banana, Laranja'



/* Includes retorna um boolean se houver match de strings
 *  Aceita que informe por onde a procura deve começar, utilizando o index
 */
if (frutas.includes('Banana', 10)) {
  console.log('Banana');
} else {
  console.log('Não tem banana');
}


/* 
 * endsWith & startsWith retorna um boolean se houver match de strings
 * Aceita que informe por onde a procura deve começar, utilizando o index
*/
if (frutas.endsWith("x")) {
  console.log(frutas.length);
} else if (frutas.startsWith("M")) {
  console.log("Aye");
}