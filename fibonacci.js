function fibArray(n){
    let bilFib = [0,1];
    if(n<0) return "Invalid input, please provide a positif integer.";
    for(let i=2;i <= n;i++){
        bilFib[i] = bilFib[i-1] + bilFib[i-2];
    }
    return bilFib.slice(0,n+1);
}



console.log(fibArray(2));