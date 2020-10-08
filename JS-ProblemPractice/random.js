let num = 2.5687;
let result = Math.floor(num);
let result2 = Math.ceil(num);
let result3 = Math.round(num);
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.random() * 6;
  let output = Math.round(randomNumber);
  console.log(output);
}
let randomNumber = Math.random() * 10;
let output = Math.round(randomNumber);
console.log(result, result2, result3, output);
