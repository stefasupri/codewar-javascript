//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
// function sum(numbers) {
//     return numbers.reduce((a,b)=>a+b,0);
// };

const sum = (numbers)=> numbers.reduce((a,b)=>a+b,0);

console.log(sum([1, 5.2, 4, 0, -1]));