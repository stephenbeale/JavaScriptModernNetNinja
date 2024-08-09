//variables and block scope

let age = 30;

age = 50;
if (true) {
  //recreates the variable with local scope only
  let age = 40;
  console.log("inside code block", age);
}
console.log("outside code block", age);
