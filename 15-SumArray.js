//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if(array === null || array.length <= 2)  return 0;
    const min = Math.min(...array);
    const max = Math.max(...array);
    let sumA = 0;
    for(let i=0;i < array.length;i++){
        sumA += array[i];
    }

  return sumA - min - max;
}

console.log(sumArray([3,4,5,2,1]));