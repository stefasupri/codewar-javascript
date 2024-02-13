// const min = (list) => list.sort((a,b)=>a-b)[0];
// const max = (list) => list.sort((a,b)=>b-a)[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,673,-134,566]));