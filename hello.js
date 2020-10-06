var bananaPrice = 12;
console.log(bananaPrice);
var seenAfter = 21;
console.log(typeof seenAfter);

var name = "This is a String";
console.log(typeof name);

var isHot = true;
var isRich = false;
console.log(typeof isRich);

var promise = "I am learning JS";
console.log(promise.toLocaleLowerCase());
console.log(promise.indexOf("will"));
console.log(promise.indexOf("learning"));
console.log(promise.split(" "));

var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2);
number2 = parseInt(number2);
number2 = +number2;
console.log(number1 + number2);

var number3 = 34;
var number4 = 39;
number1 = "" + number3;
console.log(typeof number1);

var number5 = 0.35;
var number6 = 0.72;
var total = number5 + number6;
total = total.toFixed(5);
console.log(total);

var price1 = 27;
var price2 = 3;
//price2 = price2 + 1;
price2++;
console.log(price2);

var name = "Space";
var practice = "Practice";
var concat = name + " " + practice;
console.log(concat);

var absNumber = -354;
var absoluteNumber = Math.abs(absNumber);
console.log(absNumber);

var roundNumber = 2.365;
var rndNumber = Math.round(roundNumber);
console.log(rndNumber);

var ceilNumber = 5.03241;
var clNumber = Math.ceil(ceilNumber);
console.log(clNumber);

var floorlNumber = 5.03241;
var flNumber = Math.floor(floorlNumber);
console.log(flNumber);

var randomNumber = Math.random() * 100;
//var randomNumber = randomNumber;
var rdNumber = Math.round(randomNumber);
console.log(rdNumber);
