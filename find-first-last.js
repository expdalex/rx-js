import { of } from "rxjs";
import { first, last, find } from "rxjs/operators";

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }

};

of(1, 5, 'Hello', 'World')
    // .pipe(first())
    .pipe(find(x => x === 5))
    .subscribe(createSubscribe('find'));