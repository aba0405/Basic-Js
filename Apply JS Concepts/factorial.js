// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial = factorial * i;
//   console.log(i, factorial);
// }

function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= 10; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let result = factorial(7);
console.log(result);
