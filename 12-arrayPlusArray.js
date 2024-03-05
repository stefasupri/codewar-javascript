// function arrayPlusArray(arr1, arr2) {
//     let tot = 0;
//     for(i=0;i<arr1.length;i++){
//         tot+= arr1[i];
//     }
//     for(i=0;i<arr2.length;i++){
//         tot+= arr2[i];
//     }

//     return tot; //something went wrong
// }
// function arrayPlusArray(arr1, arr2) {
//     let tot = 0;
//     for(i=0;i<arguments.length;i++){
//         for(j=0;j<arguments[i].length;j++){
//             tot+= arguments[i][j];
//         }
//     }
    
//     return tot; //something went wrong
// }

// const arrayPlusArray = (arr1, arr2) => [...arr1,...arr2].reduce((acc,cur)=> acc + cur);
 //something went wrong
 
 const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc,cur)=> acc + cur);

console.log(arrayPlusArray([1, 2, 3], [4,2]));