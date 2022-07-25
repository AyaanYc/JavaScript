const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let sum = 0;

arr.forEach(element => {
    if(element<70){
        sum+=element;
    }
});
console.log(`sum: ${sum}`);