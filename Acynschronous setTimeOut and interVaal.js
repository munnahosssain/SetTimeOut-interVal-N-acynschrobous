function doSomething() {
    console.log(111);
}
setTimeout(doSomething, 1000);//moved floor & 10000ms

setTimeout(function () {
    console.log('Showing after 5 second from regular execute');
}, 5000)

// arrow function
setTimeout(()=>{
    console.log('see yor later');
}, 3000)

setInterval(() => {
    console.log('doing again ');
}, 3000);
console.log(222);
console.log(333);