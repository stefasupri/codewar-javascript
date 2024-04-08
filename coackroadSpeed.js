//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => s<= 0 ? 0: Math.floor(s*100000/3600);

console.log(cockroachSpeed(3.7421081791993123));