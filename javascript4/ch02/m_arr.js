const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let odd = 0, even = 0;

arr.forEach(element => {
    element%2===0 ? even += element : odd += element;
});

console.log(`홀수 : ${odd}`);
console.log(`짝수 : ${even}`);