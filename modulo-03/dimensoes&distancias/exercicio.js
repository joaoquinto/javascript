// Verifique a distância da primeira imagem
// em relação ao topo da página

const imgTop = document.querySelector('img').offsetTop
console.log(imgTop);

// Retorne a soma da largura de todas as imagens



window.onload = ()=> {
const allImg = document.querySelectorAll('img')
const imgsArray = Array.from(allImg)
const resultado = imgsArray.reduce((acc,cr)=>acc+= cr.getBoundingClientRect().width,0)
console.log(resultado);

}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const hrefs = document.querySelectorAll('a')

hrefs.forEach(element => console.log((element.clientHeight = 48 && element.clientWidth == 48 ? true : false)))

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')
const validatorWidth = matchMedia('(max-width:720px)').matches
window.onresize = ()=>{
(validatorWidth == true ? menu.classList.add('menu-mobile') : menu.classList.remove('menu-mobile') )
}