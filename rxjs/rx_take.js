const { interval,from } =  require('rxjs')
const { take,last } = require('rxjs/operators')

let count = 0;

// 表示取前10个数然后就终止
interval(1000).pipe(
  take(10)
).subscribe(
  x => { 
      count = x;
      console.log(x)
   },
  null,
  () => console.log('complete')
)


// 表示取最后一个数
from([20,12,49,45])
   .pipe(
       last()
   )
   .subscribe({
       next: x => {
           console.log('TAG', 'x = '+ x)
       },
       error: null,
       complete: () => console.log('complete')
   });
