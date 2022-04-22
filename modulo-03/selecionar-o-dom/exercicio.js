// Retorne no console todas as imagens do site

const allImgs = document.querySelectorAll('img')
console.log(allImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const img = document.querySelectorAll('[src^="img/imagem"]')
console.log(img);

// Selecione todos os links internos (onde o href começa com #)

const LinksInternos = document.querySelectorAll('[href^="#"]')
console.log(LinksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const animaisDescricaoH2 = document.querySelector('.animais-descricao h2')
console.log(animaisDescricaoH2.innerText);

// Selecione o último p do site

const lastP = document.querySelectorAll('p')
console.log(lastP[lastP.length - 1].innerText);

