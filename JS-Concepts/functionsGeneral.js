function addTodo(task){
 const newTaskElement = document.createElement('li')
}

var name = 'Frank';

function addUser(){
 var anotherName = "Joseph"
 console.log(name);
}

addUser();
//console.log(anotherName); // will not work since outside of the function

// JS IIFE
(function addUser(){
 var anotherName = "Joseph"
 console.log(name);
})(); // Example of IIFE- Immediately invoking function Expression
