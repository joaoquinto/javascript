# Modulo 04

## Criar objeto

```javascript
const carro ={
  marca: 'Marca',
  preco: 2000,
}
```

## Criar constructor Function

```javascript
function Carro(marca,preco) {
  /* Criando atributo */
  this.marca = marca,
  this.preco = preco,
  /* Criando método dentro do objeto*/
  this.buzina = function(){
      console.log(`${this.marca} buzinou`);
  },
  this.acelerou = function () {
    console.log(`${this.marca} Vrumm`);
  }
}
```

## Intânciando objeto

```javascript
const honda = new Carro("Honda",100.00000);
```

## Adicionando propriedade em objeto

```javascript
/* Atribuindo um atributo a instância honda */
honda.teste = 'oi';
```

## Criando método para a instância

```javascript

honda.acelerouEspc = function () {
  console.log('honda acelerou Vrummm');
}
```

## Exemplo de constructor function funcional

```javascript
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
```