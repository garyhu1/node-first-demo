const RX = require('rxjs');

const subject = new RX.Subject();

subject.subscribe({
    next: x => { 
        console.log('A', 'Observable A value : ' + x);
    }
});

subject.subscribe({
    next: x => {
        console.log('B', 'Observable B value : ' + x);
    }
});

subject.next("100");

subject.next("hello rxjs");