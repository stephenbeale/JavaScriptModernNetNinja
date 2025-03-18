
//regular function
// const calcArea = function(radius) {
//     return 3.142 * radius **2;
// }

// arrow function
//Parentheses are optional for 1 param, but no param or >1, they are required.
const calcArea = (radius) => {
    return 3.142 * radius **2;
}


const area = calcArea(5);
console.log('area is:', area);