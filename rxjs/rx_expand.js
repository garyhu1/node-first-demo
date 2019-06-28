const { interval, of } = require('rxjs');
const { expand, take } = require('rxjs/operators');

// 发出 2
const source = of(2);
const example = source.pipe(
  // 递归调用提供的函数
  expand(val => {
    // 2,3,4,5,6
    console.log(`Passed value: ${val}`);
    // 3,4,5,6
    return of(val + 1);
  }),
  // 用5次
  take(5)
);
/*
    "RESULT: 2"
    "Passed value: 2"
    "RESULT: 3"
    "Passed value: 3"
    "RESULT: 4"
    "Passed value: 4"
    "RESULT: 5"
    "Passed value: 5"
    "RESULT: 6"
    "Passed value: 6"
*/
// 输出: 2,3,4,5,6
const subscribe = example.subscribe(val => console.log(`RESULT: ${val}`));