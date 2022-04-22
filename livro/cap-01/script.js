let obj = {
  nome: 'João',
  idade: 23,
  genero: 'masculino',
  showDataConsole(){
    console.log('Dados:', this.nome, this.idade, this.genero);
  },
  showDataHtml(){
    document.write(this.nome, this.idade, this.genero)
  }
}

obj.showDataConsole()
obj.showDataHtml()

obj.try = function(){
  console.log(this.nome)
}

var num = 0
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num+=1;
num-=2;
num*=3;
num/=2;
num%=3

console.log(!true);

console.log(typeof 5 & 1);

console.log('typeof [1,2,3]:',typeof [1,2,3] );

console.log(!Object);

console.log(3 === '3')
console.log(null == undefined);


const obj1 = Object.assign(obj)

console.log(obj1 === obj );

obj1.showDataHtml();

obj1.try() 


var num = 0

if (num === 1) {
  console.log('Num is equal to 1');
}else {
  console.log('Num is not equal to 1, the value of num is '+ num);
}

(num === 1) ? num-- : num++

console.log(num);

var month = 5

if (month === 1) {
  console.log('January');
} else if (month === 2 ) {
  console.log('Febryary');
}else if (month === 3) {
  console.log('March');
}else{
  console.log('Month is not January, February or March');
}

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('Febryary');
    break;
  case 3: 
    console.log('March');
   break;
  default: console.log('Month is not January, February or March')
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0

while (i < 10) {
  console.log(i);
  i++
}

let j = 0

do {
  console.log(j);
  j++
} while (j < 10);
  
