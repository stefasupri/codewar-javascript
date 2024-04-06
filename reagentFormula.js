//https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript

// const isValid = (x) => !(x.includes(1) && x.includes(2)) && !(x.includes(3) && x.includes(4)) && (x.includes(5) === x.includes(6)) && (x.includes(7) || x.includes(8));
const isValid = (x) => {
    return (
        !(x.includes(1) && x.includes(2)) &&
        !(x.includes(3) && x.includes(4)) &&
        (x.includes(5) === x.includes(6)) &&
        (x.includes(7) || x.includes(8))
    )
}

console.log(isValid([5]));