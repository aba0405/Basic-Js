const students = [
 {id:21, name:'James Jones'},
 {id:14, name:'Jordaaaaan'},
 {id:5, name:'Eclipse Intelj'},
 {id:17, name:'Avery Pierce'}
];

const names = students.map(s => s.name)
const ids= students.map(s =>s.id)
const bigger = students.filter(s => s.id>10)
const finder = students.find(s => s.id>20)
console.log(finder)