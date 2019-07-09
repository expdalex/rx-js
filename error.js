import { of, range, fromEvent, from, interval, pipe, merge, concat, zip, timer, combineLatest, throwError, onErrorResumeNext } from "rxjs";
import { buffer, take, bufferTime, bufferCount, map, defaultIfEmpty, every, tap, delay, mergeAll, concatAll, mergeMap, concatMap, withLatestFrom, catchError } from "rxjs/operators";


function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log(name, ':', x);},
        complete(){console.log(name, ': completed');}
    }
};

let s1$ = throwError(new Error('kakaya-to xyuHya'));
let s2$ = interval(500).pipe(take(5));

onErrorResumeNext(s1$,s2$)
    .subscribe(createSubscribe('onErrorResumeNext'));