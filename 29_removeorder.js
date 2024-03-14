//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// function removeEveryOther(arr) {
//     //your code here
//     const newArr = [];
//     for(let i=0 ; i < arr.length; i+=2){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

const removeEveryOther = (arr)=> arr.filter((el,i) => i%2 ==0);

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));