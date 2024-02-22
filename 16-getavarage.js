// function getAverage(marks){
//     //TODO : calculate the downward rounded average of the marks array
//     return Math.floor(marks.reduce((a,b)=> (a+b))/marks.length);
//   }
const getAverage = (marks) => Math.floor(marks.reduce((a,b)=> (a+b))/marks.length);
  console.log(getAverage([1,2,3,4,5]));