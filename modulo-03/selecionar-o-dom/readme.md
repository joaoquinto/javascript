# Modulo 03

## Retornar elemento por id

```javascript
const animais = document.getElementById('animais');
console.log(animais);
```

## Retornar elementos pelo nome da classe (Array Like auto atualizável)

```javascript
/* Retorna uma HTMLCollection (ArrayLike) com todos os elementos que possuem essa classe, auto atualizavél quando recebe um novo elemento */
const gridsScetion = document.getElementsByClassName('grid-section');
console.log(gridsScetion[1]);
```

## Retornar elementos pelo nome da tag (Array Like auto atualizável)

```javascript
/* Retorna uma HTMLCollection (ArrayLike) com todos os elementos referente a tag, auto atualizavél quando recebe um novo elemento
 */
const lis = document.getElementsByTagName('li');
console.log(lis);
```

## Retornar primeiro elemento (class, tag, id)

```javascript
const elementPorClass = document.querySelector('.title');
const elementPorId = document.querySelector('#title');
const elementPorTag = document.querySelector('h1');
```

### document.querySelector() pode receber seletores css:

```javascript
/* Retorna o primeiro elemento que tenha a class (title) que seja filho de um elemento que tenha a class (container) */
const title = document.querySelector('.container .title');
```

## Retornar varios elementos iguais (Array Like não auto atualizável)

```javascript
/*
 Retorna uma NodeList (Array Like) que contém todos os (li) que são filhos de (container-lista)
 */

/*NodeList são Array Likes e podem ser manipuladas com forEach*/

const listaDeItens = document.querySelectorAll('.container-lista li');
```

## Selecionar o ultimo elemento de um array like (NodeList ou HTMLCollection)

```javascript
const listaDeItens = document.querySelectorAll('.container-lista li');

console.log(listaDeItens[--listaDeItens.length]);
```
