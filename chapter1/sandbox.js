//strings
console.log("hello world");

let email = "mario@thenetninja.co.uk";
console.log(email);

let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods

//Note difference in colours - orange is a property, green is a method, as can be seen on hover
console.log(fullName.substring(0, fullName.length));
console.log(fullName.substring(0, 4));

console.log(fullName.toUpperCase());

let result = console.log(fullName.toLowerCase());
console.log(result);

console.log(fullName.indexOf("n"));

console.log(fullName.lastIndexOf("n"));

console.log(fullName.includes("n"));

console.log(fullName.split(" "));

console.log(fullName.repeat(5));
console.log(fullName.trim());
