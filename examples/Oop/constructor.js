const Person = function (name, lastName, age){
  this.name = name
  this.lastName = lastName
  this.age = age
}

let names= ["Juan","Pedro","Camila","Maria","Jose"]
let lastNames= ["Lopez", "Rodriguez","Marcano", "Soler","Torres"]
let ages = [28,33,54,18,24]
for(let i = 0; i < 5; i++){
const person = new Person(names[i], lastNames[i], ages[i])
console.log(person)
}
