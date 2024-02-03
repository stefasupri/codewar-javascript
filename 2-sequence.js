// const reverseSeq = n => {
//     let result = [];
//     for(let i=n;i>=1;i--){
//         result.push(i);
//     }
//     return result;
// };
// const reverseSeq = n => {
// return Array(n).fill().map((bag,i)=>i+1).reverse();
// }

// const reverseSeq = n => {
//     return [...Array(n)].map((bag, i) => i + 1).reverse();
// }

const reverseSeq = n => {return [...Array(n)].map((bag, i) => n-i)};

console.log(reverseSeq(5));