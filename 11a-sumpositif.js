// function positiveSum(arr) {
//     let tot = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > 0 ) tot += arr[i];
//     }
//     return tot;
// }

// function positiveSum(arr) {
//     return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
//   }

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
console.log(positiveSum([1,4,3,4,5]));