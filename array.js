var friendsAge = [12, 17, 14, 16]; // List, Array, Collection

var silvaAge = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(14);
console.log(friendsAge.length);
friendsAge.push(15);
friendsAge.push(19);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge.length);
console.log(friendsAge);

var customerName = [
  "Robert",
  "Silva",
  "Darnell",
  "Johnson",
  "Saul",
  "Durantee",
  "Luke",
  "Alex",
];
//customerName.shift(); remove from the beginning
//customerName.unshift("Verdicchio");
//var part = customerName.slice(2);
var part = customerName.slice(2, 5);
console.log(part);
//console.log(customerName);
