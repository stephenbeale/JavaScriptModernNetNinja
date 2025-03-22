// practise arrow functions
//Convert this regular function to an arrow function
// const greet = function () {
//     return 'hello, world';
//   };

//But can also remove certain parts
//   const greet = () => {
//     return 'hello, world';
//   }

// //Most minimal arrow function with no parameters
//   const greet = () => 'hello world';


//   const result = greet();

//   console.log(result);
  
//   const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//       total += products[i] + products[i] * tax;
//     }
//     return total;
//   };


//Too much logic to put it into one line, but arrow version keeps it as small as possible
//Just remove function keyword, add arrow instead.
  const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
      }
      return total;
  }

  const result = 

  console.log(bill([1, 4], 0.2));
  