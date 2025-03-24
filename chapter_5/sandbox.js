//object literals

let user = {
    name: 'crystal',
    age: '30',
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make after marmite'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user is logged out');
    },
    logBlogs: function() {

    }

};

//this used in this way logs the global context in JS, which is the 'window' object, as can be seen on the console.
console.log(this);
