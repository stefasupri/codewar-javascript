//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

// function yearDays(year) {
//     //your code here
//     return year % 4 === 0 ? `${year} has 366 days` : `${year} has 365 days` 
// }

// function yearDays(year) {
//     //your code here
//     //console.log((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0));
//     console.log(year % 400 === 0);
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? year +' has 366 days' : year +' has 365 days' 
// }

const yearDays = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? year +' has 366 days' : year +' has 365 days'
console.log(yearDays(300));