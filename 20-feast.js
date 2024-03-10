//https://codewars.com/kata/5aa736a455f906981800360d

// function feast(beast, dish) {
//     //your function here
//     return beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1);
// }

const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast("great blue heron", "garlic naan"));