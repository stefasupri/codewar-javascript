//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// function sumArray(array) {
    
//     if(!Array.isArray(array) || array.length <= 2) return 0;
//     // Find the minimum and maximum values in the array
//   const min = Math.min(...array);
//   const max = Math.max(...array);

//   // Sum all elements except the minimum and maximum
//   const sum = array.reduce((acc, num) => (num !== min && num !== max ? acc + num : acc), 0);
//   return sum;
// }

const sumArray = array => 
array ? array.sort((a, b) => a - b).slice(1, -1).reduce((pre, val) => pre + val, 0) : 0;
const sortH = x=> x.sort((a,b)=>b-a).slice(1,-2);
console.log(sortH([3,6,7,2,9]));
const dt = [3,5,6,2];
const latMap = dt.map((c,i)=> dt[i]+1);
console.log(latMap);
console.log(sumArray([-6, 20, -1, 10, -12]));