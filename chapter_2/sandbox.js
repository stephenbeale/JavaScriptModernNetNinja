//while loops

const names = ["luigi", "mario", "yoshi"];
let i = 0;

//infinite loop if true! Don't do this

// let i = 0;
// while (i < 5) {
//     console.log("in loop", i);
//     i++;
// };

while (i < names.length) {
    console.log(names[i]);
    i++;
}