function getFullName(firstName, lastName){
 //console.log(arguments)
 //const fullName = firstName + ' ' + lastName;
 let fullName = ''
 for(let i = 0; i<arguments.length; i++){
  let namePart = arguments[i]
  fullName = fullName + ' ' + namePart;
 }
 return fullName;
}

const name = getFullName('James', 'Hebert', 'Philps', 'Rosario');
console.log(name)