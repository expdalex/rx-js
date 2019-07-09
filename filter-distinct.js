import { of, range, fromEvent, from } from "rxjs";
import { first, last, find, filter, map, debounceTime, distinct, distinctUntilChanged } from "rxjs/operators";

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }
};

const cars = [
    {
        name: 'audi',
        price: 500
    },
    {
        name: 'BMW',
        price: 300
    },
    {
        name: 'Ford',
        price: 200
    }
];

let input = document.querySelector('input');

fromEvent(input, 'keyup')
    .pipe(map(e => e.target.value))
    .subscribe(x => {
        from(cars)
            .pipe(filter( c => c.name === x ))
            .subscribe(v=>{
                document.querySelector('div').innerHTML =`<h2>${v.name.toUpperCase()}</h2><h4>${v.price}</h4>`;
            });
    });

range(0, 10)
    .pipe(filter(x => x === 3))
    .subscribe(createSubscribe('filter'));
    
fromEvent(input, 'keyup')
    .pipe(map(e => e.target.value))
    .pipe(debounceTime(1500))
    .pipe(distinct())
    .subscribe(createSubscribe('debounceTime'));
  
from([1,2,3,4,5,5,5,1,1,99,99,2,4,6])
    .pipe(distinctUntilChanged())
    .subscribe(createSubscribe('fron'));