/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
 * 2. Whenever a function is called by a preceding dot, the object before that dot is this.
 * 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
 * 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
 *
 * write out a code example of each explanation above
 */

// Principle 1
function GreetMe(name) {
  console.log("Hello " + name);
}
GreetMe("John");
// code example for Window Binding

// Principle 2
let greetUs = {
  greeting: "Hello ",
  speak: function(name) {
    console.log(this.greeting + name);
  }
};

greetUs.speak("Tayo");
// code example for Implicit Binding

// Principle 3
function GreetMeAgain(name) {
  this.greeting = "Hello ";
  this.name = name;
  this.speak = function() {
    console.log(this.greeting + this.name);
  };
}
GreetMeAgain.prototype.sayGoodbye = function() {
    console.log('Goodbye ' + this.name);
};

let greetJohn = new GreetMeAgain("John");
let greetJane = new GreetMeAgain("Jane");

greetJohn.sayGoodbye();
greetJane.sayGoodbye();

// code example for New Binding

// Principle 4
greetJohn.sayGoodbye.call(greetJane);
greetJane.sayGoodbye.apply(greetJohn);
// code example for Explicit Binding
