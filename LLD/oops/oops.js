// class in javascript
class Person {
    withoutConstructor = "this is how";
    withoutConstructorAge = 20;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method inside class
    greet() {
      console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    }
  }
// let person1 = new Person('Alice', 30);
// person1.greet();  // Output: Hello, I am Alice and I am 30 years old.

// 2. Encapsulation in ES6
/* Encapsulation refers to the bundling of data and methods that work on that data into a single unit (the class). In ES6, encapsulation can be enhanced using private properties (with # syntax) and getter/setter methods to control how the properties are accessed and modified. */
class Car {
    #engine;  // private property
  
    constructor(brand, engine) {
      this.brand = brand;  // public property
      this.#engine = engine;  // private property
    }
    // to make private method use #before name
    #privateMethod() {
        // …
    }
    // Getter method to access the private engine property
    get engineInfo() {
      return this.#engine;
    }
  
    // Setter method to modify the private engine property
    set engineInfo(newEngine) {
      this.#engine = newEngine;
    }
  
    startCar() {
      console.log(`Starting ${this.brand} with ${this.#engine} engine.`);
    }
  }
// let myCar = new Car('Tesla', 'Electric');
// console.log(myCar.engine);  // will not be able to access that directly
// myCar.startCar();  // Output: Starting Tesla with Electric engine.
// console.log(myCar.engineInfo);  // Output: Electric
// myCar.engineInfo = 'V8';  // Modify engine using setter
// console.log(myCar.engineInfo);  // Output: V8

// 3. Inheritance in ES6
/* Inheritance is the process by which one class (child class) can acquire the properties and methods of another class (parent class). This is achieved using the extends keyword in ES6. */

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
class Dog extends Animal {
    constructor(name, breed) {
      super(name);  // Calls the parent class's constructor
      this.breed = breed;
    }
  
    // Overriding the speak method
    speak() {
      console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();  // Output: Buddy barks.

//The Dog class extends the Animal class and inherits its properties and methods.
/* => super() is used to call the constructor of the parent class (Animal) and pass arguments like name to it.
=> The speak method in the Dog class overrides the speak method of the Animal class, which is an example of polymorphism. */

// 4. Polymorphism in ES6
/* Polymorphism allows objects of different types to be treated in the same way, even though they behave differently. This can be achieved through method overriding (as seen above) and dynamic method resolution at runtime. */

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    sound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    sound() {
      console.log(`${this.name} meows.`);
    }
  }
  
  let animals = [new Dog('Rex'), new Cat('Whiskers')];
  
  animals.forEach(animal => {
    animal.sound();
  });

//  5. Abstraction in ES6
/* Abstraction involves hiding the complexity of implementation and showing only the essential features. In JavaScript, private fields (with #) can help achieve abstraction by preventing direct access to certain properties and methods.*/

// 6. Static Methods
/*ES6 introduced static methods, which are methods that belong to the class itself, rather than to instances of the class. They are called on the class, not on objects. */

class MathUtil {
    static add(a, b) {
      return a + b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  }
  
  console.log(MathUtil.add(5, 10));       // Output: 15
  console.log(MathUtil.multiply(3, 4));   // Output: 12

// conclusion 
/* Using ES6, JavaScript offers a modern and powerful way to implement OOP concepts:

Encapsulation: Through private fields (#) and getter/setter methods.
Inheritance: Through the extends and super() keywords.
Polymorphism: Achieved through method overriding.
Abstraction: By hiding internal details using private fields and exposing only essential behavior.
Static methods: Define utility methods that belong to the class rather than the object.
Let me know if you'd like to explore any particular concept further! */