// SL - 100
// SL nice (but why not get used to always putting code in IIFE so no globals?, also always add 'use strict')
// Q2/C

for (let step = 0; step < 10; step++) {

    window.myApp.Count.Increment();
}


console.log('count Q2/A', window.myApp.Count.getCount());

const cnt1 = window.app.count2.createCounter();


for (let step = 0; step < 5; step++) {

    cnt1.incrementCounter();
}
console.log('count1 Q2/b', cnt1.getCurrentCount());


const cnt2 = window.app.count2.createCounter();


for (let step = 0; step < 15; step++) {

    cnt2.incrementCounter();
}



console.log('count2 Q2/b', cnt2.getCurrentCount());


console.log('number of "b" counters:', window.app.count2.getNumberOfCounters());


