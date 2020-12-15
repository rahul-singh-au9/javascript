// Assignment - Revisiting this keyword

// This assignment is dedicated for better understanding of the “this” keyword.

//     1) Create a function constructor called Person which contains the properties name, energy, id, sing, walk. Name and energy can be dynamic, but id has to be auto incremented. Methods sing, walk should be initialised as null when creating it for the first time.

//     2) Create 2 factory functions outside the constructor function naming as sing and walk. Sing function should reduce the user’s energy by 2. If energy is less than 2, then you should return the string called “Can't sing anymore”. Else return the string as “currentUser.name is singing”, where currentUser.name should be the current user’s name. Walk function should reduce the user’s energy by 1. Same strategy of “sing” function is followed.

//     3) To make things work, create 2 - 3 users, and wire their sing and walk methods to the above global functions. One important note you should take care of is that you must refer the current user inside the global sing and walk functions using this keyword only. Code it, and watch how “this” keyword is working.

class Person {
  constructor(name, energy, id){
    this.name = name;
    this.energy = energy;
    this.id = id;
    this.sing = function(){
      return `${this.name} is singing`
    }
    this.walk = function(){
      return `${this.name} is walking`
    }
  }
  Sing = function(){
    if (this.energy >2){
      return `${this.name} is singing with energy ${this.energy = this.energy-2}`
    }else{
      return `${this.name} can't sing anymore`
    }
  }

  Walk = function(){
    if (this.energy >2){
      return `${this.name} is singing with energy ${this.energy = this.energy-1}`
    }else{
      return `${this.name} can't sing anymore`
    }
  }
}

const person1 = new Person("jack", 10, 1)
console.log(person1.Sing())
console.log(person1.Sing())
console.log(person1.Sing())
console.log(person1.Walk())
console.log(person1.Walk())
console.log(person1.Walk())
console.log(person1)

const person2 = new Person("john", 13, 2)
console.log(person2.Sing())
console.log(person2.Sing())
console.log(person2.Sing())
console.log(person2.Walk())
console.log(person2.Walk())
console.log(person2.Walk())
console.log(person2)

const person3 = new Person("jarry", 9, 3)
console.log(person3.Sing())
console.log(person3.Sing())
console.log(person3.Sing())
console.log(person3.Walk())
console.log(person3.Walk())
console.log(person3.Walk())
console.log(person3)