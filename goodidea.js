//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
    const s = x.filter(m=> m === 'good').length;
    if(s === 0){
        return 'Fail!';
    }else if(s <= 2){
        return 'Publish!';
    }else{
        return 'I smell a series!'
    }
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));