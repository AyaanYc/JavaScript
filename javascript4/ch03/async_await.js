const cleanRoom = () => new Promise(resolve => {
    resolve('I cleaned the room');
});

const removeGarbage = (msg) => new Promise(resolve => {
    resolve(msg + ' I threw away the trash');
});

const winIcecream = (msg) => new Promise(resolve => {
    resolve(msg + ', so I got to eat some ice cream.');
});


const fn = async () => {
    const r1 = await cleanRoom();
    const r2 = await removeGarbage(r1);
    const r3 = await winIcecream(r2);
    console.log(r3);
}

// async function fn2() {
//     const r1 = await cleanRoom();
//     const r2 = await removeGarbage(r1);
//     const r3 = await winIcecream(r2);
//     console.log(r3);
// }

// fn2();
