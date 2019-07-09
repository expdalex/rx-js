import { Observable } from 'rxjs';

var stream$ = new Observable.create(function(observer){
    observer.next('One');

    setTimeout(function(){
        observer.complete();
    },2000);
    setTimeout(function(){
        //observer.error('After 1 sec');
        observer.next('After 1 sec');
    },1000);
    setTimeout(function(){
        observer.next('After 3 sec');
    },3000);
    
    observer.next('Two');

});

stream$.subscribe(
    function(date){
        console.log(date);
    },
    function(error){
        console.log("error", error);
    },
    function(){
        console.log('Completed');
    }
    );