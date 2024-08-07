let ninjas = ["yoshi", "mario", "luigi"];
console.log(ninjas);

console.log(ninjas[1]);

ninjas[1] = "ryu";
console.log(ninjas[1]);

console.log("Ages array");
let ages = ["20", "25", "30", "35"];

console.log(ages);
console.log("Ages array as table");
console.table(ages);

console.log("Ninjas and ages arrays as group collapsed");
console.groupCollapsed(ninjas, ages);
console.groupEnd();
