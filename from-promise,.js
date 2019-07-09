import { Observable, from } from "rxjs";

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }

};


function delay(ms = 1000){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(ms);
        }, ms);
    });
    
}

// delay(3000).then(()=>{
//     console.log('Promise was resolved!');
// });

const p$ = from(delay(3000));

p$.subscribe(createSubscribe('fromPromise'));