//Ctrl + ` -> 터미널(Code) -> Ctrl + Alt + n
let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user);