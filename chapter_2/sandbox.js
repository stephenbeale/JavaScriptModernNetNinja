//type conversion
let score = "100";

//type conversion
score = Number(score);

console.log(score + 1);

console.log("Type checking e.g. typeof score outputs: ");
console.log(typeof score);

//cast to string
let result = String(50);

console.log("Type checking e.g. 'result, typeof result' outputs: ");
console.log(result, typeof result);

//Boolean - truthy or falsey values
console.log("Booleans");
result = Boolean(100);
console.log(result, typeof result);

//Zero is false
result = Boolean(0);
console.log(result, typeof result);

//Minus numbers are true!
result = Boolean(-100);
console.log(result, typeof result);

//String of zero - is true!
//strings are always truthy
result = Boolean("0");
console.log(result, typeof result);

//Empty string are always false!
//strings are always truthy
result = Boolean("");
console.log(result, typeof result);
