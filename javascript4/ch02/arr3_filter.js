const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr2 = arr.filter(item => {
    return item % 3 === 0;
});
console.log(arr2);