let marks = [45, 54, 87, 98, 23, 58, 63];
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
  let element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log("Highest Mark is: ", max);
