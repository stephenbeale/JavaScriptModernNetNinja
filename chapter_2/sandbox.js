let ninjas = ["yoshi", "mario", "luigi"];
// console.log(ninjas);

// console.log(ninjas[1]);

// ninjas[1] = "ryu";
// console.log(ninjas[1]);

// console.log("Ages array");
let ages = ["20", "25", "30", "35"];

// console.log(ages);
// console.log("Ages array as table");
// console.table(ages);

// console.log("Ninjas and ages arrays as group collapsed");
// console.groupCollapsed(ninjas, ages);
// console.groupEnd();

let random = ["shaun", "crystal", 30, 20];
console.log(random);
console.log("Length of random array: " + random.length);
console.log("Final index of random array: " + (random.length - 1));

//array methods

// console.log(random.join(","));
// console.log(random.join(" HELLO "));

let result = ninjas.concat(ages);
// console.log(result);
// console.table(result);

// result = ninjas.concat(["ken", "chun-li"]);
// console.log(result);
// console.table(result);

result = ninjas.push("ryu");
console.log("Result with pushed element adds new length of the array");
console.log(ninjas);
