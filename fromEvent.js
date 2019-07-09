
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';

var btn = document.querySelector('button');

var btn$ = fromEvent(btn, 'click');

btn$.subscribe((data) => {
    console.log(data);
});

var input = document.querySelector('input');
fromEvent(input, 'keyup').subscribe((data)=>{
    console.log(data);
});

fromEvent(document, 'mousemove').subscribe((data)=>{
    document.querySelector('h1').innerHTML = `X: ${data.clientX}, Y: ${data.clientY}`;
});