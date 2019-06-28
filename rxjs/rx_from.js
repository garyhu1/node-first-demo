const { from } = require("rxjs");

// 通过from创建，传入数组，并且会把每个元素都遍历传出去
const observable = from([1000,22,40]);

console.log('TAG', 'start')

const subscription = observable.subscribe(data => {
    console.log('TAG', 'data ===> ' + data)
});

console.log('TAG', 'end')