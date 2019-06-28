const { timer } = require('rxjs');
const { takeUntil } = require('rxjs/operators')

// 表示第一个参数需要在1秒以后开始传递，每间隔2秒再传递
let subscription = timer(1000,2000)
.subscribe(
  x => console.log('x = ' + x),
  null,
  () => console.log('complete')
)

setTimeout(() => {
  subscription.unsubscribe();
},10000)