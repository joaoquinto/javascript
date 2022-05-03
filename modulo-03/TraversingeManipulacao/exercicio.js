// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const menuCloneNode = menu.cloneNode(true)

const copy = document.querySelector('.copy')

copy.after(menuCloneNode)
// Selecione o primeiro DT da dl de Faq

const faqDT = document.querySelector('.faq-lista').querySelector('dt')
console.log(faqDT);

// Selecione o DD referente ao primeiro DT

const dd = faqDT.nextElementSibling;

console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')
