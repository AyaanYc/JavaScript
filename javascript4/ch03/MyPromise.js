// 객체 주소값이 저장됨(참조) return값
function MyPromise(cb) {
    this.data = undefined;
    function resolve(res) {
        this.data = res;
        this.then();
    }
}

function reject(err) {
    this.data = err;
    this.catch();
}

