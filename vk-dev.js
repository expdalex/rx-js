import { fromEvent, from, of } from "rxjs";
import { map, take, pluck, distinct, debounceTime, mergeMap, catchError } from "rxjs/operators";

function getUserById(id) {
    const params = {
        user_id: id,
        v: 5.52,
        access_token: '871c315f871c315f871c315fda87774aa48871c871c315fda01c4635dd9807fecb1e875',
        fields: 'photo_max'
    };

    //users.get

     return $.ajax({
        url: 'https://api.vk.com/method/users.get?' + $.param(params),
        type: 'GET',
        dataType: 'JSONP'
    }).promise();
}


//console.log(getUserById(3005006));
// *************** */
// const params = {
//     user_ids: 3005006,
//     v: 5.52,
//     access_token: '871c315f871c315f871c315fda87774aa48871c871c315fda01c4635dd9807fecb1e875',
//     fields: 'photo_max'
// };

// let a = $.ajax({
//     url: 'https://api.vk.com/method/users.get?' + $.param(params),
//     type: 'GET',
//     dataType: 'JSONP'
// }).promise();

// from(a).subscribe(x=>console.log(x));
//console.log($.param(params));
//console.log(a);
//******************** */

fromEvent($('input'), 'keyup')
    .pipe(pluck('target', 'value'))
    .pipe(distinct())
    .pipe(debounceTime(2000))
    .pipe(mergeMap(v => {
        return from(getUserById(v));
    }))
    //.pipe(catchError(error => {return of(error)}))
    .pipe(map(x => x.response[0]))
    .subscribe(
        (user) => {
            //document.querySelector('h1').innerHTML = user.first_name;
            $('h1').html(`Имя ${user.first_name} ${user.last_name}`);
            $('img').attr('src', user.photo_max);
        },
        error => console.log(error),
        () => console.log('Completed!')
    );

    



