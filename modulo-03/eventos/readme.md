# Modulo 03

## Eventos

### Parâmetro event

```javascript
/* O parâmetro event retorna um objeto baseado no evento escolhido,
    pode ser MouseEvent, PointerEvent, DragEvent & etc
    E retorna valores baseados no NodeList ou HTMLElement manipulado
    obs: Pode ser chamado por qualquer nome
*/
function callback(event) {
  console.log('clicou');
  console.log(event);
}
img.addEventListener('click', callback);
```

### Parâmetros do event

```javascript
const animaisLista = document.querySelector('.animais-lista');

/* Parâmetros do event */
function animaisCallback(event) {
  const currentTarget = event.currentTarget; // Retorna o this do elemento que foi configurado no querySelector
  const target = event.target; // Mostra onde foi clicado
  console.log(this);
  const type = event.type; // Retorna o tipo do evento
  const path = event.path; // Retorna um Array com o caminho do item que foi clicado
  console.log(currentTarget);
  console.log(target);
  console.log(type);
  console.log(path);
}
```

#### Ex:

```javascript
// Quando o usuário clicar nos links internos do site,
// adiciona a classe ativo ao item clicado e remove dos
// demais itens caso eles possuam a mesma.

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleEventLinkInterno(event) {
  linksInternos.forEach((linksInterno) => {
    if (event.currentTarget === linksInterno) {
      event.currentTarget.classList.add('ativo');
    } else {
      linksInterno.classList.remove('ativo');
    }
  });
}

linksInternos.forEach((linksInterno) => {
  linksInterno.addEventListener('click', handleEventLinkInterno);
});
```
