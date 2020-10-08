let speech =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";
console.log(speech.length);
let count = 0;
for (let i = 0; i < speech.length; i++) {
  let char = speech[i];
  console.log(char);
  if (char == " " && speech[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
