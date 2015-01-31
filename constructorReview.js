//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function (species, name, legs, color, foodArray) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = foodArray;
};


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender) {
  var newObj = {};
  newObj.name = name;
  newObj.age = age;
  newObj.height = height;
  newObj.gender = gender;
};


//Create a animal array and a person array.

var animals = [];
var people = [];


//Create two instances of Animal and push those into your animal array

animals.push(new Animal('Dog', 'Maggie', 4, 'Multi', ['Dog food', 'meat', 'garbage']), new Animal('Cat', 'Rosco', 4, 'Black', ['Cat food', 'small birds', 'poop']));


//Create two instances of person and push those into your person array.

people.push(person('Steven', 26, '5\'10\"', "Male"), person('Audrey', 23, '5\'6\"', 'Female'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function () {
    var ranNum = Math.floor(Math.random() * (this.food.length));
    alert(this.name + " ate " + this.food[ranNum]);
};


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  //No, because there is no prototype-like function for functions



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/