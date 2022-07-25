const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const result = arr.reduce((preVal, curVal) => {
    return preVal + curVal;
});

console.log(`result : ${result}`);

let sum = 0;
arr.forEach(item => {
    sum += item;
})
console.log(`sum : ${sum}`);
