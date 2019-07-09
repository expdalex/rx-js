import { of, range, fromEvent, from, interval, pipe } from "rxjs";
import { buffer, take, bufferTime, bufferCount, map } from "rxjs/operators";


function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }
};

// interval(500)
//     .pipe(bufferTime(2000))
//     .pipe(take(4))
//     .subscribe(createSubscribe('bufferTime'));

// range(0, 40)
//     .pipe(bufferCount(10))
//     .subscribe(createSubscribe('bufferCount'));

interval(1000)
    .pipe(buffer(fromEvent(document, 'click')))
    .pipe(map(x => x.length+' sec'))
    .subscribe(createSubscribe('bufer'));