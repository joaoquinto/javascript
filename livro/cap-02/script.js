const jsFramework = {
  name: 'Angular'
}

jsFramework.language = 'JavaScript'

console.log('Frameworks',jsFramework);

let movie = 'Lord of Rings'
/* var movie = 'Batman Vs SUperman' */

function starWarsFan() {
  const movie = 'Star Wars'
  return movie
}

function marvelFan() {
  movie = 'The Avengers'
  return movie
}

function blizzardFan() {
  const isFan = true
  let phrase = 'Warcraft'
  console.log('Before if: ' + phrase );
  if (isFan) {
    let phrase = 'For te Horde!'
    console.log('Inside if: ' + phrase);
  }
  phrase =  'For the Alliance'
  console.log('After if: ' + phrase);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan()

const book = {
  name:'Learning Javascript DataStructures and Algorithms'
}

console.log(`You are reading ${book.name}.,
and this is a new line
and so is this
`);

const circleArea = r =>{
const PI = Math.PI
const area = PI * r * r
  return area.toFixed(3)
}

console.log(circleArea(2));

function sum(x = 1, y = 2, z = 3) {
  return x + y + z
}

console.log(sum(4,2));


let params = [3,4,5]

console.log(sum(...params));

console.log(sum.apply(undefined, params));

function showNum(...numbers) {
  numbers.forEach(number => console.log(number))
}

showNum(1,2,5,6,3,4,8)

function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length
}

console.log(restParameterFunction(1,2, 'hello', true, 7));