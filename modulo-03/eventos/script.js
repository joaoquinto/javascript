const img = document.querySelector('img')

/* Event retorna um objeto baseado no evento escolhido
    pode ser MouseEvent, PointerEvent, DragEvent & etc
    E retorna valores baseados no NodeList ou HTMLElement manipulado
    obs: Pode ser chamado por qualquer nome
*/
function callback(event) {
  console.log("clicou");
  console.log(event);
}
/* img.addEventListener('click', callback) */

const animaisLista = document.querySelector('.animais-lista')

/* Parâmetros do event */
function animaisCallback(event) {
  const currentTarget = event.currentTarget // Retorna o this do elemento que foi configurado no querySelector
  const target = event.target // Mostra onde foi clicado
  console.log(this);
  const type = event.type // Retorna o tipo do evento
  const path = event.path // Retorna um Array com o caminho do item que foi clicado
  console.log(currentTarget);
  console.log(target);
  console.log(type);
  console.log(path);

}

/* animaisLista.addEventListener('click', animaisCallback) */

const linkExterno = document.querySelector('a[href^="http"]')

function linkCallback(event) {
  event.preventDefault()
  console.log(event.currentTarget);
}

linkExterno.addEventListener('scr', linkCallback)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type);
  console.log(event);
}

h1.addEventListener('click', handleEvent)

/* addEventListener('scroll', handleEvent)
addEventListener('resize', handleEvent)
addEventListener('keydown', handleEvent) */

function handleKeyboard(event) {
  console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard)

const imgs = document.querySelectorAll('img')

function handleImgs(event) {
  console.log(event.currentTarget);
}

imgs.forEach(img => {
  img.addEventListener('click', handleImgs)
})