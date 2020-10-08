function reverseString(str) {
  let reverse = "";
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
let statement = "The majority have suffered alteration in some form";
let output = reverseString(statement);
console.log(output);
