const numbers = [4,6,9,7,8,4,6]
//const part = numbers.slice(2, 5)
const removed = numbers.splice(2,5,4,8)
console.log(removed)

const together = numbers.join(" ")
console.log(together)