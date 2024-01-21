// variables:
const dogSound = "woof";
let dogBreed = "shih tzu";

// fucntion :
function speak() {
  console.log(`${dogBreed} says ${dogSound}`);
}

// object
const dog = {
  sound: "woof",
  dogBreed: "shih tzu",
  speak: function() {
    console.log(`${this.dogBreed} says ${this.sound}`);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log("dog === this");
    }
    this.speak();
  }
};

dog.teachMeSomething();
