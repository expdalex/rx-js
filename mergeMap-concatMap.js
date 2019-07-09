import { of, range, fromEvent, from, interval, pipe, merge, concat } from "rxjs";
import { buffer, take, bufferTime, bufferCount, map, defaultIfEmpty, every, tap, delay, mergeAll, concatAll, mergeMap, concatMap } from "rxjs/operators";


function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }
};

// of('Hello').subscribe(x => {
//     of(x + ' World')
//         .subscribe(createSubscribe('mergeMap'));
// })
// of('Hello')
//     .pipe(mergeMap(x => {
//         return of(x + ' World!111')
//     }))
//     .subscribe(createSubscribe('mergeMap'));

// const p = (data) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(data +' say hi!');
//         }, 3000);
//     });
// };

// of('one')
//     .pipe(mergeMap(x => {
//         return p(x);
//     }))
//     .subscribe(createSubscribe('Promise'));

range(1,10)
    .pipe(concatMap((x, i) => {
        return interval(100)
            .pipe(take(x))
            .pipe(map(q => i))
    }))
    .subscribe(createSubscribe('concatMap'));

