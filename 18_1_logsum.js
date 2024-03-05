
https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript
// function logs(x, a, b) {
//     //your code here
//     let result = 0;
//     const sumA =  Math.log(a) / Math.log(x);
//     const sumB =  Math.log(b) / Math.log(x);
//     return sumA + sumB;
// }

const logs = (x,a,b) => (Math.log(a)/Math.log(x)) + (Math.log(b)/Math.log(x)); 
console.log(logs(10, 2, 3));