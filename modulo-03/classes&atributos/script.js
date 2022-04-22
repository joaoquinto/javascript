const menu = document.querySelector('.menu')

/* Retorna uma DOMTokenList (ArrayLike) das classes que o item possue
    O objeto classList tem metódos (add,contains,remove,replace,toggle,forEach) entre outros
 */
console.log(menu.classList);

/*
 Insere uma classe ao item
 É possivel colocar multiplas classes, dividindo por virgulas
 */
menu.classList.add('ativo','azul')

/* Pode ser acessada como um array normal */
console.log(menu.classList[1]);


console.log(menu.classList)

/* Remove uma classe da DOMTokenList */
menu.classList.remove('azul')

console.log(menu.classList)

/* Checa se a DOMTokenList tem o item se tiver ele remove o item, do contrário 
    insere
 */
/* menu.classList.toggle('azul'); */

/* Verifica se a DOMTokenList tem um item, se tiver retorna true, do         contrário  false
 */
const azulInsert = (menu.classList.contains('azul') !== true ? menu.classList.add('azul') : menu.classList.remove('azul'))

console.log(menu.classList);

/* Attributes */

const animais = document.querySelector('.animais')

/* Retorna uma NamedNodeMap, com os atributos que um item possue (Array Like) */
console.log(animais.attributes);

/* Retorna o 2 item da NamedNodeMap
  Os itens são posicionados da mesma forma que foram inseridos no HTML  
*/
console.log(animais.attributes[1]);

/* Como acessar atributos com hífen */
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img')

/* Retorna o atributo solicitado, do contrário null  */
console.log(img.getAttribute('src'));

/* 
  Cria e insere um atributo ao item
  Ele irá sobescrever o atríbuto se já houver um
*/
img.setAttribute('alt','Raposa')

console.log(img.getAttribute('alt'));

/* Verifica se o item tem o atributo e retorna true se tiver, do contrário      false
 */
console.log(img.hasAttribute('alt'));

/* Remove o atributo solicitado do item */
img.removeAttribute('alt')