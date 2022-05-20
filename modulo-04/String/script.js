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

const nome = "João Victor O. Pereira"

console.log(nome.length);
/*  */
console.log(nome.slice(10, nome.length));

/* 
 * Retorna o index do primeiro caractere
 * que der match com o parametro
 */
console.log(nome.indexOf("O"));

/* Caso de uso do indexOf & slice */
const startLastName = nome.indexOf("O")
const endLastName = nome.length
const lastName = nome.slice(startLastName, endLastName)

console.log(lastName);




function Loteamento(numeroCasa, QD, ...numerosTelefone) {
  this.numeroCasa = numeroCasa,
    this.qD = QD,
    this.numerosTelefone = numerosTelefone,
    this.showData = function () {
      let data = "";
      data += `Sua casa é N°:${this.numeroCasa} e fica na QD: ${this.qD} e tem os números ${this.numerosTelefone}`
      return data
    }
}

const loteamento = new Loteamento(97, 07, "71 9991792684 ", "71 33289584", "71 33289514", "71 32933337")



console.log(loteamento.showData());