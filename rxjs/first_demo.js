const RX = require("rxjs");

const observable = RX.Observable.create(observer => {
    setTimeout(() => {
        observer.next("hello RXJS");
        observer.error("error message");
        observer.complete();
    },1000);
});

console.log('TAG', 'start')
const subscription = observable.subscribe({
    next: (data) => {
        console.log('TAG', 'data = '+data)
    },
    error: err => {
        console.log('TAG', 'err = '+err)
    },
    complete: () => {
        console.log('TAG', 'complete');
        // 清理资源
        // subscription.unsubscribe();
    }
});
console.log('TAG', 'end')