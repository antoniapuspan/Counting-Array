const array = [];
let counter = 0;
setInterval(() => {
    counter++;
    array.unshift(counter);
    
}, 1000);