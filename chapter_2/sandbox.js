//get a reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'yoshi'];

let html = ``;

people.forEach(function(person) {
    html += `<li style="color: purple">${person}</li>`
})