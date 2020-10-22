const ages = [21, 27, 39, 45, 24]
const ages2 = [45, 97, 41, 74]
const AllAges = ages.concat(ages2)
const AllAges2 = [ages, ages2]
const AllAges3 = [...ages,...ages2]
console.log(AllAges)
console.log(AllAges2)
console.log(AllAges3)


const firstNumber = 985;
const secondNumber = 745;
const thirdNumber = 874;
const highestNumber = Math.max(firstNumber,secondNumber,thirdNumber)
const highestNumber2 = [985, 745, 874]
const highestNumber3 = Math.max(...highestNumber2)
console.log(highestNumber)
console.log(highestNumber2)
console.log(highestNumber3)