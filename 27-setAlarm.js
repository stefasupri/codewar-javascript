//https://www.codewars.com/kata/568dcc3c7f12767a62000038
// function setAlarm(employed, vacation){
//     return employed && !vacation;
// }

const setAlarm = (employed, vacation) => employed > vacation;

console.log(setAlarm(true, true));