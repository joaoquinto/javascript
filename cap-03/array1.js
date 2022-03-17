const numbers = [1,2,3,4,5,6,7,8,9,10]

for (const number of numbers) {
  console.log(number % 2 === 0 ? `${number} even ` : `${number} odd ` );
}

let iterator = numbers[Symbol.iterator]()

for (const n of iterator) {
  console.log(n);
}

const metas = document.querySelectorAll('meta')

const arrayMetas = Array.from(metas)

const contenIsNotEmpty = arrayMetas.map((meta)=>{
  return meta.content !== ''
})

console.log(contenIsNotEmpty);