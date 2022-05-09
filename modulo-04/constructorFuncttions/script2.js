
/* Constructor function que retorna um element e ativa ele */
function Dom(seletor,classe) {
  this.element = function(){
    return document.querySelector(seletor);
  },
 this.ativar = function(){
    this.element().classList.add(classe);
  }
}

const li = new Dom('li','ativo');

li.ativar();

const lastLi = new Dom('li:last-child','ultimo');
lastLi.ativar()


console.log(lastLi.element().classList);

const ul = new Dom('ul','ativo');

