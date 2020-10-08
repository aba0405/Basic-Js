let numbers = [3, 6, 2, 7, 7, 45, 97, 45, 63, 69, 63];
let findNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  let index = findNumbers.indexOf(element);
  if (index == -1) {
    findNumbers.push(element);
  }
}
console.log(findNumbers);
