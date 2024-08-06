//template strings
const title = "Best reads of 2024";
const author = "Mario";
const likes = 30;

//concatenation way
let result =
  "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

//template string way

//template string AKA template literal
let tresult = `The blog called ${title} by ${author} has ${likes} likes`;
console.table([result]);
//creating html templates

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);

console.table([html]);

document.body.innerHTML = html;
