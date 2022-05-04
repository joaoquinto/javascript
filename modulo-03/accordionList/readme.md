# Modulo 03

## Duas formas de se fazer uma accordion List

```javascript
/* Seleciona a lista de itens clicáveis */
const jsAccordionList = document.querySelectorAll('.js-accordionList dt');
/* Seleciona a lista de itens que vão aparecer ao clique */
const jsContentList = document.querySelectorAll('.js-accordionList dd');

/* Faz o primeiro item ser visivel */
jsContentList[0].classList.add('visible');

/* Função que recebe o index do elemento clicável */
function accordionList(index) {
  /* Faz um bloco de codigo para cada elemento */
  jsContentList.forEach((element, indexDd) => {
    /* Verifica se o index do elemento vai aparecer ao clique é igual ao index do elemento clicavel */
    if (index === indexDd) {
      /* Adiciona senão houver remove se houver */
      element.classList.toggle('visible');
    }
  });
}

/* Faz um bloco de codigo para cada elemento e pega o index do elemento clicável*/
jsAccordionList.forEach((element, indexDt) => {
  /* Adiciona um evento a cada elemento */
  element.addEventListener('click', () => {
    /* Recebe o index do elemento clicável */
    accordionList(indexDt);
  });
});
```

```javascript
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.add(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();
```
