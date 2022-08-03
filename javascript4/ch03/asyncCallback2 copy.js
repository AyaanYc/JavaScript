let menu = '피자';

function order(responce, cb) {
    console.log(`${responce}를 주문하셨습니다.`);
    setTimeout(() => {
        cb(responce);
    }, 3000);
}

function callback(request) {
    console.log(`주문하신 ${request}가 나왔습니다.`);
}

order(menu, callback);