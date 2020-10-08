function getArraySum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
let numbers = [12, 45, 69, 74, 586, 32];
let result = getArraySum(numbers);
console.log("The total number is:", result);
let numbers2 = [16, 87, 74, 49, 745, 320];
let result2 = getArraySum(numbers2);
console.log("The total number is:", result2);
