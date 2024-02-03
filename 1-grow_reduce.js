// function grow(x){
//     let result = x[0];
//     for(let i=1;i<x.length;i++){
//         result = result * x[i];
//     }
//     return result;
// }

// function grow(x){
//     return result = x.reduce((acc,cur)=>acc*cur,1);
// }
const grow = (x) => x.reduce((acc,cur)=>acc*cur,1);

console.log(grow([1,2,3,4]));