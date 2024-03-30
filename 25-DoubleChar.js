//https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//     // Your code here
//     let result = "";
//     for(let i=0;i < str.length; i++){
//         for(let s=0; s < 2;s++){
//             result += str[i];
//         }
//     }
//     return result;
// }

// function doubleChar(str) {
//     // Your code here
//     let result = "";
//     for(let i=0;i < str.length; i++){
//         result += str[i];
//         result += str[i];
//     }
//     return result;
// }

// function doubleChar(str) {
//     // Your code here
//     return str.split('').map(el=>el+el).join('');
//     //return str.split('').map(el=>el+el).join('');
// }

const doubleChar = (str)=> [...str].map(el=>el+el).join('');

console.log(doubleChar("abcd"));