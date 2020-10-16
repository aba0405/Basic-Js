// First Step lets print 1 to 100

for (let i = 1; i<=100; i++){
 console.log(i)
}

// Second Step try to print fizz buzz

for (let i = 1; i<=100; i++){
 if(i % 3 == 0){
  console.log("Fizz")
 }
 if(i % 5 == 0){
 console.log("Buzz")
 }
if ((i % 3 != 0) && (i % 5 != 0)) {
 console.log(i)
}}

// Third Step

for (let i = 1; i<=100; i++){
 if(i % 3 == 0){
  console.log("Fizz")
 }
 if(i % 5 == 0){
 console.log("Buzz")
 }
 if ((i % 3 == 0) && (i % 5 == 0)) {
 console.log(i)
 }
if ((i % 3 != 0) && (i % 5 != 0)) {
 console.log(i)
}}

// Fourth Step
for (let i = 1; i<=100; i++){
 if((i % 3 == 0) && (i % 5 != 0)){
  console.log("Fizz")
 }
 if(i % 5 == 0){
 console.log("Buzz")
 }
 if ((i % 3 == 0) && (i % 5 == 0)) {
 console.log(i)
 }
if ((i % 3 != 0) && (i % 5 != 0)) {
 console.log(i)
}}

// Try to clean 

for (let i = 1; i<=100; i++){
 if((i % 3 == 0) && (i % 5 != 0)){
  console.log("FizzBuzz")
 }
 else if(i % 3 == 0){
 console.log("Fizz")
 }
 else if(i % 5 == 0){
 console.log("Buzz")
 }
else{
 console.log(i)
}}

// Clean Version
for (let i = 1; i<=100; i++){
let output = "";
if (i % 3 == 0) { output += "Fizz"}
if (i % 5 == 0) { output += "Buzz"}

if(output == ""){output = i}
console.log(output)
}