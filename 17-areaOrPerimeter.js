// link code war
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
//     if(l === w) {
//         return l*w;
//     }else{
//         return 2*l + 2*w;
//     }
//   };
const areaOrPerimeter = (l,w) => l === w ? l * w:2*l+2*w;

 console.log(areaOrPerimeter(6, 10));