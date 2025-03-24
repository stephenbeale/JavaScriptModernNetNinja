//object literals

let user = {
    name: 'crystal',
    age: '30',
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac and cheese rules', '10 things to make after marmite'],
    login: function() {
        console.log('the user logged in');
    }
};


//calling the method on the user
user.login();