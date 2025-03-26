//grabs the first p tag in the DOM, none of the others
const para = document.querySelector('p');

//Shows a reference to the p tag. First step to manipulating it.
console.log(para);

//grabs the first class of error in the DOM, none of the others
// needs the . to make it look for a css class, given the syntax
const error = document.querySelector('.error');

//Shows a reference to the p tag. First step to manipulating it.
console.log(error);

//Looks for a more specific error, div with a class of 'error'
const divError = document.querySelector('div.error');

//Shows a reference to the p tag. First step to manipulating it.
//Needed when you have multiple of the same thing.
console.log(divError);

//to get unique selector, right click > copy > Copy selector - gives unique selector
//e.g. head > title
console.log(document.querySelector('head > title'));