//link code war
//https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

// function greet(name, owner) {
//     // Add code here
//     if(name === owner) {
//         return "Hello boss";
//     }else{
//         return "Hello guest";
//     }
// }

const greet = (name,owner) => name === owner ? "Hello boss" : "Hello guest";

console.log(greet('Greg', 'Daniel'));