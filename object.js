var student = { id: 8, phone: 8745, name: "John" };
var student2 = { id: 3, phone: 74569, name: "Doe" };

console.log(student);

var phoneNo = student2.phone;
var phoneNo = student2["phone"]; // object could be access through property name

student2.phone = 74568; // Changing a value
student2["phone"] = 84569; // Another way to change a value

console.log(phoneNo);
