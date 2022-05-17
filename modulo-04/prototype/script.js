function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}

Pessoa.prototype.andar = function () {
  return 'Pessoa andou'
}

console.log(Pessoa.prototype);


const andre = new Pessoa("Andre", 27);

const pais = "Brasil"

const listasAnimais = ["cachorro","Gato","Cavalo"]

const lista = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(lista)

const Carro = {
  marca: "Ford",
  preco: 20000,
  andar(){
    return true
  }
}