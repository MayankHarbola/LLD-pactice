// The common types of relationships include Association, Aggregation, Composition, and Inheritance

// 1. Association
/* Association defines a relationship between two independent objects, where one object uses or interacts with another. It is a "has-a" relationship, but both objects have independent lifecycles. Association can be one-to-one, one-to-many, or many-to-many. */

//  read this - https://chatgpt.com/share/670a7a6c-4850-800f-8c39-434f66136ea1
//  read this - https://chatgpt.com/share/670a7a6c-4850-800f-8c39-434f66136ea1

class Teacher {
    constructor(name) {
      this.name = name;
    }
  
    teach(student) {
      console.log(`${this.name} is teaching ${student.name}.`);
    }
}
  
class Student {
    constructor(name) {
      this.name = name;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  let teacher = new Teacher('Mr. John');
  let student = new Student('Alice');
  
  teacher.teach(student);  // Output: Mr. John is teaching Alice.
  student.study();         // Output: Alice is studying.
  
/* Association: Teacher and Student classes are associated because the teacher teaches the student, but both can exist independently. One teacher may teach many students, and one student may have multiple teachers. */

