//object literals

let user = {
    name: 'crystal',
    age: '30',
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make after marmite']
};

console.log(user);

console.log(user.name);

user.age = 35;

console.log(user.age);

//Looks for name property only
console.log(user['name']);

user['name'] = "chun-li";

//hmm
console.log(user['name']);