class Parent{
 constructor(){
  this.fatherName = "Lamar"
 }
}



class Child extends Parent{
 constructor(name){
   super() // Call the constructor of the Parent Class
   this.name = name
 }
 getFullName(){
  return this.name + " " + this.fatherName
 }
}

const baby = new Child("Daugh")
const baby2 = new Child("Alex")
console.log(baby.getFullName())
console.log(baby2)