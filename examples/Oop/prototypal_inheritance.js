const Person = function (name, lastName, age, like =[]){
  this.name = name
  this.lastName = lastName
  this.age = age
  this.like = like
}
Person.prototype.getBio = function(){
  let info =`${this.name} is ${this.age}`
  this.like.forEach((l) => {
    info += ` Likes ${l} `
  });
  return info

}
Person.prototype.setName = function(fullName){
  const names = fullName.split(" ")
  this.name = names[0]
  this.lastName = names[1]
}
//Person.prototype.planet ="Earth"


let names= ["Juan","Pedro","Camila","Maria","Jose"]
let lastNames= ["Lopez", "Rodriguez","Marcano", "Soler","Torres"]
let ages = [28,33,54,18,24]
let likes = [
  ["Biking", "teaching"],
  ["Climbing"],
   ["Swimming", "Gaming"],
   ["Biking", "teaching"],
   ["Running", "sports", "football"]
 ]
 let person;
for(let i = 0; i < 5; i++){
  person = new Person(names[i], lastNames[i], ages[i], likes[i])
  console.log(person.getBio())
  /*if(i< 4){
    let fullName = `${names[++i]} ${lastNames[++i]}`
    person.setName(fullName)
    console.log(person.getBio())
  }*/
  //console.log(person.planet)
}

Person.prototype.getBio = function(){
  console.log("get bio changed!")
}

person.getBio()

person.getBio = function(){
  console.log("Only change for person")
}

person.getBio()


//Has own property


console.log(person.hasOwnProperty("name"));

console.log(person.hasOwnProperty("hasOwnProperty"));


// object ---> object.prototype --> null


/*Object.prototype.hasOwnProperty = () => {
  console.log("method override")
}*/




Object.prototype.newMethod = () => {
  console.log("new method created")
}

person.hasOwnProperty()
person.newMethod()



// Array ---> Array.prototype --> object.prototype --> null

const arr = [1,2]

console.log(arr.hasOwnProperty("hasOwnProperty"))
console.log(arr.hasOwnProperty("filter"))


//Function --> Function.protype --> Object.prototype --> null

const funct = () => 1


console.log(funct)




//String --> String.prototype --> Object.prototype --> null
//Number --> Number.prototype --> Object.prototype --> null
//Boolean --> Boolean.prototype --> Object.prototype --> null
