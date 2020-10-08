let a = 5;
let b = 7;
console.log("Before Swap: a=", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap: a=", a, "b =", b);

let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: x=", x, "y =", y);

let p = 5;
let q = 7;
[p, q] = [q, p];
console.log("After Swap: p=", p, "q =", q);
