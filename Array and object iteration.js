//task 1 : Iterate Over an array

//step1 : your are given an array of dairy products

let dairy  = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream','milkshake'];

//step2: create a function called logDairy() and using  a for...of loop to see each of the items in console.

function logDairy() {
  for(let product of dairy){
    console.log(product);
  }
}

logDairy() 

//Task 2: You are giving the folloging starter code:
const animal = {
  canJump: true,
}

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
//console.log(bird);

//create a function called birdCan() to loop over the bird objects properties.
//Finally call the function birdCan() to see the ouput in console.

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key + ": " + bird[key]); 
    } 
};

birdCan();

//task 3: using the same code from task 2, create a function called animalCan.
//loop over all the properties in the bird object and its prototype(animal object). 
//Call de function.

function animalCan() {
    for (prop in bird) {
      console.log(prop + ':' + bird[prop]);
    } 
};

animalCan();

//task 3
