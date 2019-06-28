// RxJS v6+
const { interval } = require('rxjs');
const { take,bufferToggle } = require('rxjs/operators');

// 每1秒发出值
const sourceInterval = interval(1000);
// 5秒后开启第一个缓冲区，然后每5秒钟开启新的缓冲区
const startInterval = interval(5000);
// 3秒后发出之前缓存的值以关闭相应的缓冲区
const closingInterval = val => {
  console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
  return interval(3000);
};
// 每5秒会开启一个新的缓冲区以收集发出的值，3秒后发出缓冲的值
const bufferToggleInterval = sourceInterval.pipe(
  take(30),  
  bufferToggle(
    startInterval,
    closingInterval
  )
);
// 输出到控制台
// 输出: Emitted Buffer: [4,5,6]...[9,10,11]
const subscribe = bufferToggleInterval.subscribe(val =>
  console.log('Emitted Buffer:', val)
);