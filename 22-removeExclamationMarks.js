//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// function removeExclamationMarks(s) {
//     let result = '';
//     for(let i=0;i < s.length;i++){
//         if(s[i] != '!'){
//             result += s[i];
//         }
//     }
//     return result;
// }

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }

const removeExclamationMarks = (s)=> s.replace(/!/gi,'');

console.log(removeExclamationMarks("Hello World!"));