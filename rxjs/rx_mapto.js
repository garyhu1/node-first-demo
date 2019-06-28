const { interval } = require('rxjs');
const { mapTo } = require('rxjs/operators');

// 每2秒发出值
const source = interval(2000);
// 将所有发出值映射成同一个值
const example = source.pipe(mapTo('HELLO WORLD!'));
// 输出: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));