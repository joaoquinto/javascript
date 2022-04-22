const section = document.querySelector('.animais .animais-lista')

console.log(section.clientHeight); // Retorna a altura e o padding somados
console.log(section.offsetHeight); // Retorna a altura, padding e a border somados
console.log(section.scrollHeight); // Retorna a altura, padding, border e a altura do elemento scrollavel  

console.log(section.offsetTop); // Retorna a distância entre o elemento e o topo da página
console.log(section.offsetLeft); // Retorna a distância entre o elemento e o canto esquerdo da página.

const rect = section.getBoundingClientRect() // Retorna um objeto de propriedades que podem retornar width,top, height, left, right

console.log(rect.right);

console.log(innerWidth); // Retorna a largura interna da tela, contando a scrollbar

console.log(outerWidth); // Retorna a largura interna da tela, contando a scrollbar, barra de pesquisa e sidebar


console.log(pageYOffset); // Retorna a movimentação do elemento no eixo Y, (foi depreciado) recomendasse usar o ScrollY
console.log(scrollY);

console.log(matchMedia('(min-width:600px)')); // Retorna um objeto que valida a largura ou altura da tela