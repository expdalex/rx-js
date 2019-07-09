const p = new Promise((resolve, reject)=>{
    let bud = 1000;
    let sub = 300;
    if (bud > sub) {
        resolve(()=>{
            return a = 'resolve';
        });
    } else{
        reject('bad day');
    }
});

p
    .then((val)=>{
        console.log('eee', val());
    })
    .catch((val)=>{
        console.log('ohhhhh', val);
    });