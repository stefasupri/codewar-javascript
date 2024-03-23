//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// function monkeyCount(n) {
//     // your code here
//     let m = [];
//     for(let i=0;i < n;i++){
//         m.push(i+1);
//     }
//     return m;
// }

const monkeyCount = (n) => Array.from({length:n},(_,i)=> i+1);


console.log(monkeyCount(5))