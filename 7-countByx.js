// function countBy(x, n) {
//     let z = [];
//     for(let i=1;i<=n;i++){
//         let k = 0;
//         k += x*i;
//         z.push(k);
//     }
  
//     return z;
//   }

// function countBy(x,n){
//     return [...Array(n)].map((el,i)=> (i+1) *x );
// }

//const countBy = (x,n) =>[...Array(n)].map((el,i)=> (i+1) *x );
countBy = (x, n) => Array.from({length: n},(_,index) =>x + (index * x))

console.log(countBy(2,5));