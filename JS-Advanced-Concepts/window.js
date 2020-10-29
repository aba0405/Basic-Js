let name = "Haris"

function add (num1, num2){
 let result = num1 + num2
 console.log('result inside', name)
 // console.log('result inside', result)
 return result
}

 console.log('result outside', name)
 // console.log('result inside', result)
let sum  = add (12, 21)
console.log(sum)