const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square(element){
//     return element * element;
// }
// const result = element => element * element;
// const result = x => x * x;

// const result = numbers.map(function(element){
//     return element * element;
// })

//const result = numbers.map(x => x * x);

//const bigger = numbers.filter(x => x > 3);

const isThere = numbers.find(x => x > 5);

console.log(isThere);