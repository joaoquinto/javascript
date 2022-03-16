let foo = ['one', 'two', 'three']

const [one, two, three] = foo

console.log(one);



const pessoa = {
  nome: 'João',
  genero: 'Masculino',
  telefone: 71991792684,
  casa:{
    cep: 41295630,
    num:97,
    qd: 07,
    lot:19,
    bairro: 'Pirajá'
  }
}

const {nome, casa}  = pessoa

console.log('Casa',casa);

const quinn = {"id":3,"name":"Quinn Ergon","status":"Alive","species":"Human","gender":"Female","hair":"Dark Brown","alias":["Nightfall(codename)","Muy Bueno Super Spicy Lady (by Gary)","Magnificent Goddess (by Biskit)"],"origin":"Earth","abilities":["Astrophysicist","Engineer","Piloting","Hand - to - hand Combat"],"img_url":"https://finalspaceapi.com/api/character/avatar/quinn_ergon.jpg"}

const {name, abilities, alias, img_url} = quinn

const img = document.querySelector('img')
img.src = img_url

const h1 = document.querySelector('h1').innerHTML = name

const abilitiesList = document.querySelectorAll('#abilities li')

abilitiesList.forEach((element, index)=>{
  element.innerHTML = abilities[index]
})

const aliasList = document.querySelectorAll('#alias li')

aliasList.forEach((element, index)=>{
  element.innerHTML = alias[index]
})

console.table(quinn)




