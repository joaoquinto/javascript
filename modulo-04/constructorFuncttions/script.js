 /* Criando objeto */
const carro ={
  marca: 'Marca',
  preco: 2000,

}

/* Criando constructor function para objeto */
function Carro(marca,preco) {
  /* Criando atributo */
  this.marca = marca,
  this.preco = preco,
  /* Criando método dentro do objeto*/
  this.buzina = function(){
      console.log(`${this.marca} buzinou`);
  },
  this.acelerou = function () {
    console.log(`${this.marca} Vrumm`);
  }
}

/* Instânciando objeto Carro */
const honda = new Carro("Honda",100.00000);

/* Atribuindo um atributo a instância honda */
honda.teste = 'oi';

/* Criando método para a instância */
honda.acelerouEspc = function () {
  console.log('honda acelerou Vrummm');
}

const fiat = new Carro("Fiat",200.00000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca,
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda',5000);