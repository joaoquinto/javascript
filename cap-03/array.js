let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wedbesdat', 'Thursday', 'Friday', 'Saturday']

/* console.log(daysOfWeek.length);
 */
/* for (let index = 0; index < daysOfWeek.length; index++) {
  const day = daysOfWeek[index];
  console.log(day);
} 

let numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[numbers.length] = 10;
console.log([numbers.length - 1]);

numbers.push(11,12,13)

console.log(numbers);

numbers.unshift(-4,-3,-2,-1)
console.log(numbers);
numbers.pop()
console.log(numbers);
numbers.shift()
console.log(numbers);

numbers.splice(5,3)
console.log(numbers);
numbers.splice(5,0,2,3,4)
console.log(numbers);
*/
let averageTemp = []

averageTemp[0] = [
  72, 75,79,79,81,81
]

averageTemp[1] = [
  81,79,75,73,73
]


console.table(averageTemp)

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    const element = myMatrix[i];
    for (let index = 0; index < element.length; index++) {
        console.log(element[index])
    }
  }
}

printMatrix(averageTemp)

const matrix3x3x3 = []

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []
  for (let j = 0; j < 3; j++) {
  matrix3x3x3[i][j] = []
  for (let z = 0; z < 3; z++) {
    matrix3x3x3[i][j][z] = i + j + z
  }
  }
}

console.table(matrix3x3x3)

for (let i = 0; i < matrix3x3x3.length; i++) {
  const element0 = matrix3x3x3[i];
  for (let j = 0; j < element0.length; j++) {
    const element1 = element0[j];
    for (let z = 0; z < element1.length; z++) {
      const element2 = element1[z];
/*       console.log(element2); */
    }
  }
}

const zero = 0

const positiveNumbers = [1,2,3]
const negativeNumbers = [-3,-2,-1]

let numbers = negativeNumbers.concat(zero,positiveNumbers)

console.log(numbers);

function isEven(nums) {
  const isTrue = []
  nums.forEach( num => num % 2 === 0 ? isTrue.unshift(true) : isTrue.unshift(false))
  console.log('isEven',isTrue);
}

isEven(numbers)

const isTrue = numbers.map(num => num % 2 === 0 ? true : false)

console.log('isTrue',isTrue);

const sumNumbers = numbers.reduce((acc, cur)=>{
   return acc+=cur
},0)

console.log(sumNumbers);