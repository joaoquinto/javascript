const h1Selecionado = document.querySelector('h1')

function callbackH1() {
  console.log(`Clicou em "${h1Selecionado.innerText}"`);
}

h1Selecionado.addEventListener('click',callbackH1)