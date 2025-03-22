//callbacks and for-each

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {
    console.log(value);
});