// Q2/C

for (let step = 0; step < 10; step++) {

    window.myApp.Count.Increment();
} 
// couldn't figure out why this for loop didn't work for the other ones.(I tried it.)

console.log('count Q2/A', window.myApp.Count.getCount());

const cnt1 = window.app.count2.createCounter();
cnt1.incrementCounter();
cnt1.incrementCounter();
cnt1.incrementCounter();
cnt1.incrementCounter();
cnt1.incrementCounter();
console.log('count1 Q2/b', cnt1.getCurrentCount());


const cnt2 = window.app.count2.createCounter();

cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();
cnt2.incrementCounter();




console.log('count2 Q2/b', cnt2.getCurrentCount());


console.log('number of "b" counters:', window.app.count2.getNumberOfCounters());
