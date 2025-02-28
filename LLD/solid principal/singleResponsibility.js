class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getUserData() {
      return { name: this.name, email: this.email };
    }
  
    // Handling authentication is a separate responsibility
    authenticateUser(password) {
      // Some authentication logic here
      return password === "securePassword";
    }
}
// Refactored Code: Separate classes for User and AuthService
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    getUserData() {
      return { name: this.name, email: this.email };
    }
}

class AuthService {
    authenticateUser(user, password) {
      // Authentication logic goes here
      return password === "securePassword";
    }
}

/*
Definition: A class or module should have only one reason to change, meaning it should have only one responsibility
What could go wrong if not followed? If a class has more than one responsibility, it becomes harder to maintain. Every time you need to change one part of the functionality, you risk breaking other parts of the system. Over time, this leads to highly coupled and brittle code.

Consequences:
- Harder to test: You have to mock more dependencies when testing.
- Coupling of logic: Changing authentication logic might force changes in user data handling.
- Lower maintainability: When modifying authentication, you might accidentally introduce bugs into the user data functionality.
*/