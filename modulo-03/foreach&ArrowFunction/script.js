const imgs = document.querySelectorAll('img')

/* Manipula cada item da NodeList individualmente*/
imgs.forEach(function(valorAtual,index,array) {
    //console.log(valorAtual);
})

/* Retorna uma HTMLCollection com todos os elementos que tenham a class (titulo) */
const titulos = document.getElementsByClassName('titulo')

/* Transforma a HTMLCollection em um Array */
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(titulo) {
    console.log(titulo);
})

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