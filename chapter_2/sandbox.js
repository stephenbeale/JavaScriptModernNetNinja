
//regular function
const calcArea = function(radius) {
    return 3.142 * radius **2;
}

// arrow function
const calcArea = (radius) => {
    return 3.142 * radius **2;
}


const area = calcArea(5);
console.log('area is:', area);