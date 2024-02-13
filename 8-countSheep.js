// var countSheep = function (num){
//     //your code here
//     let s="";
//     for(i=1;i<=num;i++){
//         s += `${i} sheep...`    ;
//     }
//     return s;
//   }

    const countSheep = (x)=> [...Array(x)].map((_,i)=> `${i+1} sheep...`).join(''); 

console.log(countSheep(3));