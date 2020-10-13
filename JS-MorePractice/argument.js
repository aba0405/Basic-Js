function addNumbers(num1, num2){
 return num1 + num2
}

let result = addNumbers(3, 5)
console.log(result)


function addMoreNumbers(num1, num2){
 let sum = 0;
 for(let i = 0; i< arguments.length; i++){
  const num = arguments[i];
  sun = sun + num
 }
}

let result2 = addNumbers(13, 7, 3, 7)
console.log(result2)