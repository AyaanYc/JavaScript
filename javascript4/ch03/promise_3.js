const cleanRoom = () => new Promise(resolve => {
    resolve('I cleaned the room');
});

const removeGarbage = (msg) => new Promise(resolve => {
    resolve(msg + ' I threw away the trash');
});

const winIcecream = (msg) => new Promise(resolve => {
    resolve(msg + ', so I got to eat some ice cream.');
});


const p1 = cleanRoom();
p1.then(r1 => 
    removeGarbage(r1)
).then(r2 => 
    winIcecream(r2)
).then(r3 => {
    console.log(r3);
})



