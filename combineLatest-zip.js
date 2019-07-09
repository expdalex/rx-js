import { of, range, fromEvent, from, interval, pipe, merge, concat, zip, timer, combineLatest } from "rxjs";
import { buffer, take, bufferTime, bufferCount, map, defaultIfEmpty, every, tap, delay, mergeAll, concatAll, mergeMap, concatMap, withLatestFrom } from "rxjs/operators";


function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }
};

// const s1$ = of('hi');
// const s2$ = of('world!');

// zip(s1$,s2$.pipe(delay(3000))).subscribe(createSubscribe('zip'));

// const int1$ = interval(1000);
// const int2$ = interval(500);

// int1$
//     .pipe(take(5))
//     .pipe(withLatestFrom(int2$))
//     .subscribe(createSubscribe('withlatestFrom'));

let t1$ = timer(1000, 2000);
let t2$ = timer(2000, 2000);
let t3$ = timer(3000, 2000);

combineLatest(t1$, t2$, t3$)
    .pipe(take(5))
    .subscribe(createSubscribe('combineLatest'));