/*In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
Prime numbers are divisible only by the number 1 or itself.
For example, 2, 3, 5, 7 and 11 are the first few prime numbers.*/

function isPrime(n) {
  for (i = 2; i < n; i++) {
    //console.log(i, n / i, n % i);
    if (n % i == 0) {
      return "Not a Prime Number";
    }
  }
  return "This is a Prime Number";
}

let result = isPrime(128);
console.log(result);
