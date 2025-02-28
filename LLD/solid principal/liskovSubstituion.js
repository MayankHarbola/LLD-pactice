/*
Definition: Subtypes must be substitutable for their base types without altering the correctness of the program.
subClass should extend the functionality of parent class not narrow it down
if class B is subtype of class A, then we should be able to replace object of A with B without breaking the behaviour of the program.
*/

// Violation of LSP: A subclass that breaks behavior expected from the base class.
class Bird {
    Bird(name) {
      this.name = name;
    }
    getName(){
        console.log(`bird name ${name}`);
    }
    fly() {
      console.log("Flying...");
    }
  }
  
  class Ostrich extends Bird {
    fly() {
      // Ostrich can't fly, so this implementation is problematic.
      throw new Error("Ostriches cannot fly!");
    }
  }
  
  function makeBirdFly(bird) {
    bird.getName()
    bird.fly();
  }
  
  // This will break because Ostrich does not comply with the behavior of a Bird.
  const ostrich = new Ostrich('ostrich');
  makeBirdFly(ostrich);

// To follow LSP, you should create a different hierarchy for flightless birds:

class Bird {
    Bird(name) {
        this.name = name;
    }
    getName(){
        console.log(`bird name ${name}`);
    }
}
class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Eagle extends FlyingBird {}
class Ostrich extends Bird {}

// Now, `makeBirdFly` will only accept FlyingBird instances.
function makeBirdFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly();
  }
  bird.getName();
}

const eagle = new Eagle('Eagle');
makeBirdFly(eagle); // Works fine

// The LSP is satisfied because Ostrich no longer breaks the contract of Bird by inheriting only the properties that are relevant.

/*
What could go wrong if not followed? If subclasses violate the expectations of their base classes, they can cause bugs when they're used in the same way as their parent class. Code that works for the base class may break for the subclass. Violating LSP leads to incorrect program behavior and confusing interfaces.

Consequences:
- Runtime errors: The system expects all Bird objects to fly, but the Ostrich subclass throws an error.
- Violation of assumptions: Clients of Bird have to check what kind of bird it is before calling fly(), which breaks abstraction.
*/