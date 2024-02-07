// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     return distanceToPump / mpg <= fuelLeft;
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(50, 20, 2));