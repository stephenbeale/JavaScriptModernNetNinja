//callbacks and for-each

let people = ['mario', 'luigi', 'yoshi'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);    
}

//Call the method on the people array, person name is arbitray, created on the fly
people.forEach((logPerson));