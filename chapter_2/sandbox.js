//get a reference to the ul
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'yoshi'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);

//Grabs the ul, places the html inside the ul.
ul.innerHTML = html;