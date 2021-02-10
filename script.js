const array = [];
let counter = 0;
setInterval(() => {
    counter++;
    array.unshift(counter);
    if (array.length > 9) {
        array.pop();
    }
    console.log(array);
}, 1000);