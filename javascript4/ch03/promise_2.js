// 객체 주소값이 저장됨(참조) return값
const p1 = new Promise((resolve, reject) => {
    resolve();
});

p1
.then( res => {
    console.log('나는 then');
})
.catch( err => {
    console.log('나는 catch');
});