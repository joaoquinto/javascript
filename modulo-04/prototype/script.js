function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}

Pessoa.prototype.andar = function () {
  return 'Pessoa andou'
}

console.log(Pessoa.prototype);


const andre = new Pessoa("Andre", 27);