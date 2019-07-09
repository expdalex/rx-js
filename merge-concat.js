import { of, range, fromEvent, from, interval, pipe, merge, concat } from "rxjs";
import { buffer, take, bufferTime, bufferCount, map, defaultIfEmpty, every, tap, delay, mergeAll, concatAll } from "rxjs/operators";


function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }
};

// const s1$ = interval(1000).pipe(map(x=>'s1:' + x));
// const s2$ = interval(500).pipe(map(x=>'s2:' + x));

// merge(s1$,s2$)
//     .pipe(take(12))
//     .subscribe(createSubscribe('merge'));

// range(1,3) //1,2,3
//     .pipe(map(x => range(2,4)))
//     .pipe(mergeAll())
//     .subscribe(createSubscribe('mergeAll'));

// const s1$ = from([1,2,3]);
// const s2$ = from([4,5,6]);

// concat(s1$,s2$).subscribe(createSubscribe('concat'));

range(1,3) //1,2,3
    .pipe(map(x => range(x,3)))
    .pipe(concatAll())
    .subscribe(createSubscribe('concatAll'));