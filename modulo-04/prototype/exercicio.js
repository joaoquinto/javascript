// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome =  nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

const pessoa = new Pessoa("JV","OP",22)
Pessoa.prototype.fullName = function(){
  console.log(`Seu nome é ${this.nome} ${this.sobrenome}`);
}
pessoa.fullName()
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

for (let index = 0; index <  1; index++) {
  console.log(li.constructor.name);
  console.log(li.click.constructor.name);
  console.log(li.innerText.constructor.name);
  console.log(li.value.constructor.name);
  console.log(li.hidden.constructor.name);
  console.log(li.offsetLeft.constructor.name);
}

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
