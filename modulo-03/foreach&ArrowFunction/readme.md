# Modulo 03

## Manipular elementos com forEach & Arrow Function

## Manipular elemento com forEach & function anônima 

```javascript

const imgs = document.querySelectorAll('img')

/*
 Manipula cada item da NodeList individualmente
 Paramêtros: 
 item: O item que está sendo manipulado atualmente
 index: O index do item na NodeList
 array: Pode ser passado o Array que está sendo manipulado ou outro
*/
imgs.forEach(function(valorAtual,index,array) {
    console.log(valorAtual,index,array);
})

```

## Transformar um Array Like em Array

```javascript

/*
 Retorna uma HTMLCollection com todos os elementos que tenham a class (titulo) */
const titulos = document.getElementsByClassName('titulo')

/* Transforma a HTMLCollection em um Array */
const titulosArray = Array.from(titulos)
```

## Arrow Function

```javascript
/*
Arrow Function
Funciona da mesma forma da function, porém não consegue acessar o (this)
Não é necessário usar o parêntese quando tiver só um argumento
É necessário usar o parêntese quando não houver nenhum argumento
*/
titulosArray.forEach((titulo)=>{
    console.log(titulo);
})

/* A Arrow Function pode ser escrita dessa forma
    quando o retorno for de uma linha & quando só tiver um paramêtro
*/

titulosArray.forEach(titulo => console.log(titulo))
```



