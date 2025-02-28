/*
Definition: No client should be forced to depend on methods it does not use. Instead of one large interface, break it down into smaller, more specific ones.
*/
// Violation of ISP: A single interface forcing all implementations to use all methods.
class Worker {
    work() {
      throw new Error("Method not implemented.");
    }
  
    eat() {
      throw new Error("Method not implemented.");
    }
  }
  
  class Developer extends Worker {
    work() {
      console.log("Writing code...");
    }
  
    eat() {
      console.log("Eating lunch...");
    }
  }
  
  class Robot extends Worker {
    work() {
      console.log("Assembling parts...");
    }
  
    // Robot shouldn't have to implement `eat` method.
    eat() {
      throw new Error("Robots don't eat.");
    }
  }
  
  // Refactored Code: Segregating into multiple interfaces
  class Workable {
    work() {
      throw new Error("Method not implemented.");
    }
  }
  
  class Eatable {
    eat() {
      throw new Error("Method not implemented.");
    }
  }
// because multiple inheritance is not possible in js or java
// or just create a another type of interface -> lving,nonliving
//   class Developer extends Workable, Eatable {
//     work() {
//       console.log("Writing code...");
//     }
  
//     eat() {
//       console.log("Eating lunch...");
//     }
//   }
// or create a 
class Developer {
    constructor() {
      Object.assign(this, Workable, Eatable); // Inject only work and eat behavior
    }
  }
  class Robot extends Workable {
    work() {
      console.log("Assembling parts...");
    }
  }

//What could go wrong if not followed? If a class is forced to implement methods it doesn't need, it leads to bloated classes and unnecessary dependencies. Changes in one method that are irrelevant to the class can still cause problems for it, making code harder to understand and maintain.