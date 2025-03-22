//callbacks and for-each

let people = ['mario', 'luigi', 'yoshi'];

//Call the method on the people array, person name is arbitray, created on the fly
people.forEach((person, index) => {
    console.log(index, person);
});