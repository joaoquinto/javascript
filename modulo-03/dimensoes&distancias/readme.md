# Modulo 03

## Classes

### Retornar as classes de um item

```javascript
const menu = document.querySelector('.menu');

/* Retorna uma DOMTokenList (ArrayLike) das classes que o item possue
    O objeto classList tem metódos (add,contains,remove,replace,toggle,forEach) entre outros
 */
console.log(menu.classList);

/* Pode ser acessada como um array normal */
console.log(menu.classList[1]);
```

### Adicionar uma classe a um item

```javascript
/*
 Insere uma ou mais classes ao item
 É possivel colocar multiplas classes, dividindo por virgulas
 */
menu.classList.add('ativo', 'azul');
```

### Remover uma classe de um item

```javascript
/* Remove uma classe da DOMTokenList */
menu.classList.remove('azul');
```

### Remover ou adicionar uma classe, dependendo se ela existe ou não

```javascript
/* Checa se a DOMTokenList tem o item se tiver ele remove o item, do contrário 
    insere
 */
menu.classList.toggle('azul');
```

### Verificar se a DOMTokenList tem uma classe

```javascript
/* Verifica se a DOMTokenList tem um item, se tiver retorna true, do         contrário  false
 */
const azulInsert =
  menu.classList.contains('azul') !== true
    ? menu.classList.add('azul')
    : menu.classList.remove('azul');

console.log(menu.classList);
```

### Inserir classes em itens de uma NodeList

```javascript
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
  item.classList.add('ativo');
});
```

### Remover uma classe de todos os itens selecionados em uma NodeList

```javascript
/* 
    Ele compara o index da NodeList com o index estipulado, se for true add
    se for false remove
 */
menuItens.forEach((item, index) =>
  index === 0 ? item.classList.add('ativo') : item.classList.remove('ativo'),
);
```

## Atributos

### Como acessar atributos

```javascript
const animais = document.querySelector('.animais');

/* Retorna uma NamedNodeMap, com os atributos que um item possue (Array Like) */
console.log(animais.attributes);

/* Retorna o segundo item da NamedNodeMap
  Os itens são posicionados da mesma forma que foram inseridos no HTML  
*/
console.log(animais.attributes[1]);
```

### Atributos com hífen

```javascript
/* Como acessar atributos com hífen */
console.log(animais.attributes['data-texto']);
```

### Como pegar um atributo em específico

```javascript
const img = document.querySelector('img');

/* Retorna o atributo solicitado, do contrário null  */
console.log(img.getAttribute('src'));
```

### Inserir um atributo

```javascript
/* 
  Cria e insere um atributo ao item
  Ele irá sobescrever o atríbuto se já houver um
*/
img.setAttribute('alt', 'Raposa');
```

### Verificar e remover atributos

```javascript
/* Verifica se o item tem o atributo e retorna true se tiver, do contrário      false
 */
console.log(img.hasAttribute('alt'));

/* Remove o atributo solicitado do item */
img.removeAttribute('alt');
```
