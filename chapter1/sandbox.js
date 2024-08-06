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
//This is also where you do or do not need to use brackets.
console.log(fullName.substring(0, fullName.length));

//technically, arguments should be used over parameters in terminology
console.log("fullName.substring(0, 8): " + fullName.substring(0, 8));
console.log(
  "fullName.substring(0, fullname.length): " +
    fullName.substring(0, fullName.length)
);

console.log(fullName.toUpperCase());
let result = console.log(fullName.toLowerCase());

console.log("fullName.indexOf('n'): " + fullName.indexOf("n"));
console.log("fullName.indexOf('o'): " + fullName.indexOf("o"));

console.log("fullName.lastIndexOf('s', 4) :" + fullName.lastIndexOf("s", 4));
console.log(
  "fullName.lastIndexOf('s', fullName.length - 1) :" +
    fullName.lastIndexOf("s", fullName.length - 1)
);

console.log(fullName.includes("n"));

console.log(fullName.split(" "));

console.log(fullName.repeat(5));
console.log(fullName.trim());
