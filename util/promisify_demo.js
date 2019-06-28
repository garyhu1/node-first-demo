let { promisify } = require("util");

// 把setTimeout包装成Promise
let setTimeoutPromise = promisify(setTimeout);

console.log('TAG', '开始');
setTimeoutPromise(40,"hello world").then(value => {
    console.log('TAG', value);
})
console.log('TAG', '结束');