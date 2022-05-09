// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome,idade) {
  this.nome = nome,
  this.idade = idade,
  this.andar = function(){
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João",20);
const Maria = new Pessoa("Maria",25);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elemento) {
  this.elements = () => document.querySelectorAll(elemento),
  this.addClass = function(classe){
   this.elements().forEach(element=>{
    element.classList.add(classe)
   })
  },
  this.removeClass = function(remover){
    this.elements().forEach(function(element) {
      element.classList.remove(remover)
    })
  }
}

const ul = new Dom("ul");
console.log(ul.elements());
ul.addClass('container')
console.log(ul.elements());
ul.removeClass('container')
