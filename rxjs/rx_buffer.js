const { interval } = require("rxjs");
const { take,buffer } = require("rxjs/operators");

interval(300).pipe(
    take(30),
    buffer(interval(1000))
  ).subscribe(
    x => console.log(x),
    null,
    () => console.log("complete")
  )
