let menu = '햄버거';

function order(request, cb) {
    console.log(`${request} 주문을 하셨습니다.`);
    setTimeout(() => {
        cb(request)
    }, 3000);
}

function callback(responce) {
    console.log(`주문하신 ${responce}가 나왔습니다.`);
}

order(menu, callback);