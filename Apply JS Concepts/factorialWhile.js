// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//   factorial = factorial * i;
//   //console.log(i, factorial);
//   i++;
// }
// console.log(factorial);

function factorial(n) {
  let i = 1;
  let fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
let result = factorial(6);
console.log(result);
