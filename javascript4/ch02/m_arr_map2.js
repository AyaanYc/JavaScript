const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const arr2 = arr.map((item,idx) => {
       return item - (idx+1);
    //    return item - (item % 10);
});
console.log(arr2);