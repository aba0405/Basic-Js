function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}

var firstFeet = feetToMile(233);
var mileRnd = Math.round(firstFeet)
console.log(mileRnd*100);
