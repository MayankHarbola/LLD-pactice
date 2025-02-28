/* 
Definition: Software entities (classes, modules, functions) should be open for extension but closed for modification. This means you should be able to add new functionality without altering the existing code.
*/

// Violation of OCP: Directly modifying existing classes for new features.
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
//   Every time you introduce a new shape (e.g., Triangle), you have to modify the AreaCalculator class
  class AreaCalculator {
    calculate(shape) {
      if (shape instanceof Rectangle) {
        return shape.area();
      } else if (shape instanceof Circle) {
        return shape.area();
      }
      return 0;
    }
  }
// *************************************************************************************************
/*
What could go wrong if not followed? When a class is not closed for modification, you need to change existing code to add new functionality. This can introduce bugs in previously working functionality and lead to fragile code. You end up breaking parts of the system that shouldn't have changed.

Consequences:
- Unscalable: Every time you introduce a new shape (e.g., Triangle), you have to modify the AreaCalculator class.
- High risk of introducing bugs: Any change to the AreaCalculator class might break functionality for    previously working shapes.
- Violated modularity: The calculator class should not need to "know" about the specific shapes.
*/

class Shape {
    area() {
      throw new Error("Area method must be implemented");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    calculate(shape) {
      return shape.area();
    }
  }

/* Now, when adding new shapes (e.g., Triangle), you only extend the Shape class without modifying the AreaCalculator class, reducing risk of regression bugs. */

