const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*numbers.filter(n => n % 2 === 0)
  .map(n => `Its # ${n}`)
  .forEach(n => console.log(n));*/

/*rxjs.from(numbers)
  .filter(n => n % 2 === 0)
  .map(n => `Its # ${n}`)
  .forEach(n => console.log(n));*/

/*rxjs.from(numbers)
  .pipe(
    rxjs.operators.filter(n => n % 2 === 0),
    rxjs.operators.map(n => `Its # ${n}`)
  ).forEach(n => console.log(n));*/

/*
rxjs.interval(1000)
  .pipe(
    rxjs.operators.take(10),
    rxjs.operators.filter(n => n % 2 === 0),
    rxjs.operators.map(n => `Its # ${n}`)
).forEach(n => console.log(n));

setInterval(() => console.log('.'), 250);*/


let theButton = document.getElementById('theButton');
/*let clicks = 0;
const clickHandler = e => {
  if (++clicks === 3) {
    theButton.removeEventListener('click', clickHandler);
  }
  console.log(e.timeStamp);
};

theButton.addEventListener('click', clickHandler);
*/

/*
rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.take(3),
    rxjs.operators.map(e => e.timeStamp)
  ).forEach(n => console.log(n));

rxjs.fromEvent(document, 'click')
  .pipe(
    rxjs.operators.scan(count => count + 1, 0)
  ).forEach(n => console.log(n));
  */

/*
let lastClick = new Date();
document.addEventListener('click', () => {
if (new Date() - lastClick >= 2000) {
  lastClick = new Date();
  console.log('Clicked at ', new Date().toLocaleTimeString());
}
});
*/

/*
rxjs.fromEvent(document, 'click')
  .pipe(
    rxjs.operators.throttleTime(1000),
    rxjs.operators.scan(count => count + 1, 0)
).forEach(n => console.log(`Click #${n} at ${new Date().toLocaleTimeString()}`));
*/

const myObserver = {
  next: v => console.log(v),
  error: err => console.error('subscription got', err),
  complete: () => console.log('completed')
};

/* try catch doesnt work - async
try {
  rxjs.fromEvent(theButton, 'click')
    .pipe(
      rxjs.operators.take(3),
      rxjs.operators.map(e => {
        throw new Error('Problem...');
        return e.timeStamp;
      })
    ).subscribe(
      myObserver
    );
} catch(err) {
  console.error('catch caught', err);
}*/

/*
const subscription = rxjs.fromEvent(theButton, 'click')
  .pipe(
    rxjs.operators.map(e => {
      return e.timeStamp;
    })
  ).subscribe(
    myObserver
  );

  setTimeout(() => subscription.unsubscribe(), 5000);
  */

/*rxjs.Observable.create(observer => {
  observer.next("Value #1");
  //observer.error(new Error('OOPS'));
  observer.next("Value #2");
  //observer.complete();
  observer.next("Value #3");

  let i = 3;
  setInterval(() => observer.next(`value #${++i}`), 1000);
}).subscribe(myObserver);*/

rxjs.Observable.create(observer => {
  let i = 0;
  theButton.addEventListener('click', e => {
    if (i++ === 3) {
      observer.complete();
    }
    observer.next(e.timeStamp);
  });
}).subscribe(myObserver);