//https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript
function multiply(number){
    //your code here
    
    return number * Math.pow(5,Math.abs(number).toString().length);
  }

console.log(Math.pow(5,2));

console.log(multiply(10));

