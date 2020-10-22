const person = {name: 'Jack Williams', age:17, job: 'Web-Developer', address:'New Jersey', phoneNumber:6415239858, hobbies:['Programming', 'Travelling', 'Painting']}

const hobbies = person.hobbies
const {age, job} = person

console.log(hobbies, age, job)

// console.log(person.hobbies)
// console.log(person.hobbies)
// console.log(person.hobbies)

const names = ['Alex', 'Silvia', 'Nichiporuk', 'Faison', 'Gracy', 'Graham']
const[first, nextNames, ...restNames] = names;
console.log(first, nextNames, restNames)