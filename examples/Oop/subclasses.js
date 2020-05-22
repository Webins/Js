class Person{
  constructor(name, lastName, age, like =[]){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.like = like
  }
  getBio(){
    let info =`${this.name} is ${this.age}`
    this.like.forEach((l) => {
      info += ` Likes ${l} `
    });
    return info
  }

  setName(){
    const names = fullName.split(" ")
    this.name = names[0]
    this.lastName = names[1]
  }
}

class Employee extends Person{
  constructor(name, lastName, age, like =[], position){
    super(name, lastName, age, like)
    this.position = position
  }
  getBio(){
    let info =`${this.name} is  ${this.age}. He likes`
    this.like.forEach((l) => {
      info += `Likes ${l}.`
    });
    info += `And his position is ${this.position}`
    return info
  }
}


first_employee = new Employee("Elliot", "Alderson", 28, ["Hacking","Morphine"], "Badass")
console.log(first_employee)
console.log(first_employee.getBio())
