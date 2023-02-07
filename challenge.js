// here we have to implement a program which will tell how many brackets will require to balance the expression
// input = "()()()()" // string of round branckets
// output = 0

// input = ())))(() ; (())() ; ((()) ; ))()((
// output = 4

let stack = [];
let inputString = "))()((";
inputString = inputString.split('')
inputString.forEach((bracket, index) => {
  if (bracket === "(") {
    stack.push(bracket)
  } else if (bracket === ")") {
    if (stack.length !== 0 && stack[stack.length - 1] === "(") {
      stack.pop()
    } else {
      stack.push(bracket)
    }
  }
  console.log(stack)
})

console.log(`We need ${stack.length} brackets to balance the string`);



// find the maximum sequence count in an array.
// [1,2,3,3,3,3,4,4] => 4 (3 in a sequence and has count 4 so op is 4)
// [2, 3, 2, 2, 2, 2] => 4 (2 in a sequence and has count 4 so op is 4)

let arr = [1,1,2,2,2]
let sequenceCountObject = {}

arr.forEach((number, index) => {
  if(index === 0) {
    sequenceCountObject[number] = 1
  } else {
    if (number === arr[index - 1]) {
      sequenceCountObject[number] = sequenceCountObject[number] + 1
    } else {
      sequenceCountObject[number] = 1
    }
  }
})

console.log('sequenceCountObject', sequenceCountObject)

let maxObject = {sequenceCount: 0, number: 0 };
for (const number in sequenceCountObject) {
  if(maxObject.sequenceCount < Number(sequenceCountObject[number])) {
    maxObject.number = number;
    maxObject.sequenceCount = sequenceCountObject[number]
  }
}

console.log('Answer', maxObject.sequenceCount)
