/*
Dependency Inversion Principle (DIP)
Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.

class should depend on interface rather than another class
*/
// Violation of DIP: High-level class directly depends on a low-level class.
class BackendDeveloper {
    develop() {
      console.log("Writing Java code");
    }
  }
  
  class FrontendDeveloper {
    develop() {
      console.log("Writing JavaScript code");
    }
  }
  
  class Project {
    constructor() {
      this.backend = new BackendDeveloper();
      this.frontend = new FrontendDeveloper();
    }
  
    developApp() {
      this.backend.develop();
      this.frontend.develop();
    }
  }

// Refactored Code: Using Dependency Injection
class BackendDeveloper {
    develop() {
      console.log("Writing Java code");
    }
  }
  
  class FrontendDeveloper {
    develop() {
      console.log("Writing JavaScript code");
    }
  }
  
  class Project {
    constructor(developers) {
      this.developers = developers; // Inject dependencies via constructor
    }
  
    developApp() {
      this.developers.forEach(dev => dev.develop());
    }
  }
  
  // Dependency Injection
  const developers = [new BackendDeveloper(), new FrontendDeveloper()];
  const project = new Project(developers);
  project.developApp();

/* In the refactored code, the Project class depends on an array of abstractions (developers) instead of directly depending on specific BackendDeveloper or FrontendDeveloper classes. now in future suppose we need another type of developer like rust developer etc we don't have to change our class */
/* Consequences:
- Inflexibility: If you need to add another developer type (e.g., MobileDeveloper), you have to modify the Project class.
- Tight coupling: Changing or replacing any developer role will affect the whole Project class, making the system harder to extend and maintain. */