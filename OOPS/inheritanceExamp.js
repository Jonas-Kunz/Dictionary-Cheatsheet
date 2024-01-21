class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }
  bio() {
    console.log(`My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}. My Email is ${this.email}`);
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}. My Email is ${this.email}`;
  }
  
}

class Student extends Person {
  bio() {
    console.log(`I AM A GOD THE GOLDEN GOD! *Falls Down Stairs* ${super.bio()}`);
  }
  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }

}

class Mentor extends Person {

  bio() {
    console.log(`I'am ${this.name} Son of ${this.quirkyFact} ${super.bio()}`);
  }
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
 
}

let student = new Student("Jonas", "I like Cheese", "BLABLABA");
student.enroll("Jan 8th 2024");
console.log(student.cohort);
student.bio()
let mentor = new Mentor("Mentor Mentorsonn", "Mentor","Mentor@Mentor.Mentor")
mentor.bio()
mentor.goOnShift();
console.log(mentor.onShift);
mentor.goOffShift();
console.log(mentor.onShift);