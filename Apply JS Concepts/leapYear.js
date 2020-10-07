const year = 3566;
const remainder = year % 4;
if (remainder == 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}
// console.log(remainder == 0); // One Equal set and two equal check

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder == 0) {
    return true;
  } else {
    return false;
  }
}

const check2000 = isLeapYear(2000);
