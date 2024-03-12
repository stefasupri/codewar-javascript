//https://www.codewars.com/kata/56f6ad906b88de513f000d96
//latihan soal ke 28

// function bonusTime(salary, bonus) {
//     // your code here
//     return `£${bonus ? salary*10 : salary}`;
// }

const bonusTime = (salary, bonus) => `£${bonus ? salary*10 : salary}`;

console.log(bonusTime(10000, true));