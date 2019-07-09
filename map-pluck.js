import { map, take, pluck } from "rxjs/operators";
import { fromEvent, of, interval, timer, range } from 'rxjs';

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }

};

of('hello', 'world', 'wfm')
    .pipe(map(x=>{return x.toUpperCase()}))
    .subscribe(createSubscribe('interval-map'));

fromEvent(document.querySelector('input'), 'keyup')
    .pipe(pluck('target', 'value'))
    //.pipe(map(x=>{return x.target.value}))
    .pipe(map(x=>{return x.toUpperCase()}))
    .pipe(map(x => { return {value: x, length: x.length}; }))
    .subscribe(createSubscribe('fromEvent-map'));

    

