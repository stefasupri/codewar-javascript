// function pillars(numPill, dist, width) {
//   // your code here
//   if (numPill <2 ) {
//     return 0; 
//   }

//   // Calculate the total distance without the width of the first and last pillar
//   const totalDistance = (numPill - 1) * dist * 100 + (numPill - 2) * width;

//   return totalDistance;
// }

const pillars = (numPill, dist, width) => numPill < 2 ? 0 : (numPill - 1) * dist * 100 + (numPill - 2) * width;

console.log(pillars(2, 20, 25));