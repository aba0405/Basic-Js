const name = "Frank Romeo";
//name = "James Romeo"; // Not Allowed due to const
console.log(name)

// Following is Allowed
const numbers = [12, 58, 69]
numbers[2] = [98]
numbers.push[74]

let patientName = "Randy Ramos"
patientName = "Rosario Julio"
console.log(patientName);

// Scope Variable- With let output will not show outside of scope however possible with var
let sum = 0;
//for(let i = 0; i<10; i++){
for(var i = 0; i<10; i++){
 sum = sum +1;
}
console.log(i)