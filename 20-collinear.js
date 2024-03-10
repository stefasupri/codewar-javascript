//https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript
function collinearity( x1,y1, x2,y2 ) {
    if(x1 === 0 && x2===0 && y1===0 && y2===0){
          return true;
      }else if(x1 === 0 && y1 === 0){
        return true;
      }else if(x2 === 0 && y2 === 0){
        return true;
      
    }else if(x1 === 0 && x2 === 0){
        return true;
      
    }else if(y1 === 0 && y2 === 0){
        return true;
      }
      else if(x1/x2 === y1/y2){
          return true;
      }else{
        return false;
      }
  }

//   function collinearity( x1,y1, x2,y2 ) {
//     return x1*y2===y1*x2;
//    }

console.log(collinearity( 5,7, 0,0 ));