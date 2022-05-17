function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou'
}



console.log(Pessoa.prototype);


const andre = new Pessoa("Andre", 27);

console.log(andre.andar());

console.log(typeof Pessoa);
console.log(typeof Pessoa.prototype);
console.log(typeof andre);


const pais = "Brasil"

const listasAnimais = ["cachorro", "Gato", "Cavalo"]

const lista = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(lista)

const Carro = {
  marca: "Ford",
  preco: 20000,
  andar() {
    return true
  }
}