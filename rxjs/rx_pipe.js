const { from } = require('rxjs');
const { filter,map } = require('rxjs/operators');

let arr = [1,2,3,4,5,6,7];

from(arr).pipe(
    filter(n => { return n > 3}),
    map(item => {return item*item})
).subscribe({
    next: value => {
        console.log('TAG', 'value = ' + value);
    },
    error: err => console.log('TAG', 'err = ' + JSON.stringify(err)),
    complete: () => console.log('TAG', 'complete')
});