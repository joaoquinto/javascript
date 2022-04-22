/* Retorna um elemento pelo id */
const animais = document.getElementById('animais')
console.log(animais);

/* Retorna uma HTMLCollection (ArrayLike) com todos os elementos que possuem essa classe, auto atualizavél quando recebe um novo elemento */
const gridsScetion = document.getElementsByClassName('grid-section')
console.log(gridsScetion[1]);

/* Retorna uma HTMLCollection (ArrayLike) com todos os elementos referente a tag, auto atualizavél quando recebe um novo elemento
*/
const lis = document.getElementsByTagName("li")
console.log(lis);

/* Retorna a primeira li do document  */
const li = document.querySelector('li')
console.log(li);

/* Retorna o primeiro link interno do document */
const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno.innerText);

/* Retorna uma NodeList (ArrayLike) de imgs, não se atualiza quando recebe um novo elemento */
const animaisImgs = document.querySelectorAll('.animais img')
console.log(animaisImgs);