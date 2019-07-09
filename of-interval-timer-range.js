import { fromEvent, of, interval, timer, range } from 'rxjs';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }

}

of(5,4,'5',5,'re').subscribe(createSubscribe("of"));

// interval(1000)
//     .pipe(take(15))
//     .subscribe(createSubscribe('interval'));

// timer(2000, 500)
//     .pipe(take(10))
//     .subscribe(createSubscribe('timer'));

range(5, 5) //начало, кол-во элементов
    .subscribe(createSubscribe('range'));