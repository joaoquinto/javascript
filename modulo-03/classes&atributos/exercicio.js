// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll(".menu a")

menuItens.forEach(item=>{
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItens.forEach((item,index) => (index === 0 ? item.classList.add('ativo') : item.classList.remove('ativo') ))


// Verifique se as imagens possuem o atributo alt

const altImgs = document.querySelectorAll('img')

altImgs.forEach(altImg=> console.log(altImg.hasAttribute('alt')))

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('.menu a[href^="http"]')

linkExterno.setAttribute('href','https://Facebook.com')
