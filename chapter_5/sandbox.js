//primitive values

// // let scoreOne = 50;
// // let scoreTwo = scoreOne;

// // console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// // scoreOne = 100;

// // console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

const userOne =  {name: 'ryu', age: 30};

//copies pointer on the stack, not the object on the heap
const userTwo = userOne;

console.log(userOne, userTwo);

//only stored on the heap, not the stack, 
// so changing userOne also changes userTwo given the pointer connection
userOne.age = 40;
console.log(userOne, userTwo);

userOne.name = "chun-li";
console.log(userOne, userTwo);