const normalPerson = {
 firstName:'Robert',
 lastName:'Silva',
 salary:15000,
 getFullName: function(){
  console.log(this.firstName, this.lastName)
 },
 chargeBill:function(amount, tips, tax){
  console.log(this)
  this.salary = this.salary - amount - tips - tax;
  return this.salary
 }
}
//console.log(normalPerson.chargeBill(5000));

const newEmployee={
 firstName:'Rosario',
 lastName:'Rosado',
 salary: 25000,
}

const anotherEmployee={
 firstName:'Lisa',
 lastName:'Rodriguez',
 salary:17000,
}

// normalPerson.chargeBill();
// const newEmployeeBill = normalPerson.chargeBill.bind(newEmployee);
// newEmployeeBill(2000)
// newEmployeeBill(5000)
// console.log(newEmployee.salary)

// normalPerson.chargeBill.call(newEmployee,900,100,10)
// normalPerson.chargeBill.call(newEmployee,100,350,50)
// console.log(newEmployee.salary)

// normalPerson.chargeBill.call(anotherEmployee,900,100,10)
// normalPerson.chargeBill.call(anotherEmployee,100,350,50)
// console.log(anotherEmployee.salary)

normalPerson.chargeBill.apply(newEmployee, [3000, 300, 30])
console.log(normalPerson.salary)
