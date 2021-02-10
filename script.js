"use strict";
const array = [];
let counter = 0;
setInterval(() => {
    counter++;
    //added the counter at the beginning of the array
    array.unshift(counter);
    //created condition so it doesn't go higher than 9
    if (array.length > 9) {
        //removes the element at the end of the array
        array.pop();
    }
    console.log(array);
}, 1000);