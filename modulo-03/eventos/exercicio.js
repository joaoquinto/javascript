// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleEventLinkInterno(event) {
  event.preventDefault()
  linksInternos.forEach(linksInterno => {
    if (event.currentTarget === linksInterno) {
      event.currentTarget.classList.add('ativo')
    } else {
      linksInterno.classList.remove('ativo')
    }
  })
}

linksInternos.forEach(linksInterno => {
  linksInterno.addEventListener('click', handleEventLinkInterno)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


const allElments = document.body.querySelectorAll('*')

function handleAll(event) {
  console.log(event.currentTarget.remove());
}

allElments.forEach(element => {
  element.addEventListener('click', handleAll)
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyDown(event) {
}

window.addEventListener('keydown')