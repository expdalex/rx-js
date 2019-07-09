import { from } from "rxjs";

function createSubscribe(name){
    return {
        next(x){console.log(name, ':', x);},
        error(err){console.log('Error :', x);},
        complete(){console.log(name, ': completed');}
    }

};

const arr = [
    {
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: 'Sam'
    }
];

const set = new Set([1,2,3,'4','5',{id:6, name: '11'}]);


from(set).subscribe(createSubscribe('from'));