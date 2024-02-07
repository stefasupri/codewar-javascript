function positiveSum(arr) {
    let tot = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0 ) tot += arr[i];
    }
    return tot;
}

console.log(positiveSum([1,2,3,4,5]));