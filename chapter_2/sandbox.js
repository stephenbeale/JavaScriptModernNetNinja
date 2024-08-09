//variables and block scope

let age = 30;

age = 50;
if (true) {
  age = 40;
  console.log("inside code block", age);
}
console.log("outside code block", age);
