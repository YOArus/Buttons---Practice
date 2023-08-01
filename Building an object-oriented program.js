//task 1: Code a person class with the parameters: name = 'Tom', age = 20, energy = 100. 
//Create two methods sleep() and  doSomeThingsFun().
//Increase the energy by 10 with the sleep() method. 
//Decrease the energy by 10 with the doSomeThingsFun() method. 


class Person {
  constructor(name = 'Tom', age = 20, energy = 100) {
    this._name = name;
    this._age = age;
    this._energy = energy;
  }
  sleep() {
    this._energy += 10;
  }
  doSomeThingsFun() {
     this._energy -= 10;
  }
}

//task 2: code a worker class that inherits the properties of the person class.
//add two new parameters: xp = 0, hourly Wage = 10. 
//Create a goToWork() method that increase the experience(xp) by 10.

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10){
    super(name, age, energy);
  	this._xp = xp;
  	this._hourlyWage = hourlyWage;
  }
  goToWork() {
    this._xp += 10;
  }
}

//Task3: code an inter function, create a new Worker and run the goToWork method.
function intern() {
  let interObject = new Worker('Bob', 21, 110, 0, 10);
  interObject.goToWork();
  return interObject;
}

//task4 code a manager function, create a new Worker and run the doSomeThingsFun method.
function manager() {
   let managerObject = new Worker('Alice', 30, 120, 100, 30);
  managerObject .doSomeThingsFun();
  return managerObject ;
}

//call the function
console.log(intern())
console.log(manager())
