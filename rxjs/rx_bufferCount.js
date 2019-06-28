const { interval } = require("rxjs");
const { take,bufferCount } = require("rxjs/operators");

interval(1000).pipe(
    take(30),
    // bufferCount(4)
    bufferCount(4,1)
  ).subscribe(
    x => console.log(x)
  )