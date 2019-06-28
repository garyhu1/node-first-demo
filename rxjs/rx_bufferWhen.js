const { interval } = require("rxjs");
const { take,bufferWhen } = require("rxjs/operators");

interval(300).pipe(
    take(30),
    bufferWhen(() => {
      return interval(1000)
    })
  ).subscribe(
    x => console.log(x)
  )