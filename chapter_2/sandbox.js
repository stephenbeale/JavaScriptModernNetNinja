let age = 25;
//loose comparison - differenty types can still be equal

// console.log(age == 25);
// console.log(age == "25");

// console.log(age != 25);
// console.log(age != "25");

//strict comparison - differenty types cannot be equal

console.log("Strict comparison, using ===");
console.log(age === 25);
console.log("Strict comparison, using === for a string '25'");
console.log(age === "25");

console.log("Strict comparison, using !== for '25'");
console.log(age !== 25);
console.log("Strict comparison, using !== for a string '25'");
console.log(age !== "25");
