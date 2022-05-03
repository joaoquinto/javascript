const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement); // Retorna o container do elemento
console.log(lista.parentElement.parentElement); // Retorna o container do container
console.log(lista.previousElementSibling); // Retorna o elmento acima dele
console.log(lista.nextElementSibling); // Retorna o elemento após ele

console.log(lista.children); // Retorna uma HTMLCollection (Array Like) com os filhos diretos do elemento
console.log(lista.children[--lista.children.length]); // Retorna o último filho da HTMLCollection

/* Manipulação */
const animais = document.querySelector('.animais')
const contato = document.querySelector(".contato")
const titulo = contato.querySelector(".titulo")
const dados = document.querySelector('.dados')

/* animais.appendChild(titulo); */ // Adiciona um element ao final do element pai selecinado
/* lista.prepend(titulo); */ // Adiciona um element ao começo do element pai selecinado

/* 
ondeVoceQuerInserir.insertBefore(O que eu quero mover, Elemento que vai depois do elemento inserido )

  contato => Elemento Pai
  animais => Elemento que vai ser redirecionado
  dados => Elemento que vai ficar depois do elemento redirecionado
  OBS: O último elemento tem que ser filho do elemento PAI


  contato.insertBefore(animais, dados)
*/


// Cria um element
const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Titulo'
novoH1.classList.add('titulo')
/* animais.appendChild(novoH1) */

// Clona um element, se por true ele traz os filhos do elemento clonado
const menu = document.querySelector('.menu')
const menuCopia = menu.cloneNode(true)

const copy = document.querySelector('.copy')

// Insere um elemento depois do elemento referência
/* copy.after(menuCopia) */