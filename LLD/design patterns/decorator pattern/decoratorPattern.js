/* The Decorator Pattern is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. This pattern is typically used to extend the functionality of objects without modifying their structure or the class itself. */

// Example: Coffee Shop
// Imagine a coffee shop where you can order a coffee and add extra features like milk, sugar, or whipped cream to it. Using the decorator pattern, we can keep the base coffee class simple and dynamically add the extras.

class Coffee {
    cost() {
      return 5; // base cost of coffee
    }
  
    description() {
      return "Simple Coffee";
    }
}

class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 1.5; // adding the cost of milk
    }
  
    description() {
      return this.coffee.description() + ", Milk";
    }
}

class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 0.5; // adding the cost of sugar
    }
  
    description() {
      return this.coffee.description() + ", Sugar";
    }
}

class WhippedCreamDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2.0; // adding the cost of whipped cream
    }
  
    description() {
      return this.coffee.description() + ", Whipped Cream";
    }
}

let myCoffee = new Coffee();
console.log(myCoffee.description() + " - $" + myCoffee.cost()); 
// Output: Simple Coffee - $5

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.description() + " - $" + myCoffee.cost()); 
// Output: Simple Coffee, Milk - $6.5

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.description() + " - $" + myCoffee.cost()); 
// Output: Simple Coffee, Milk, Sugar - $7.0

myCoffee = new WhippedCreamDecorator(myCoffee);
console.log(myCoffee.description() + " - $" + myCoffee.cost()); 
// Output: Simple Coffee, Milk, Sugar, Whipped Cream - $9.0

