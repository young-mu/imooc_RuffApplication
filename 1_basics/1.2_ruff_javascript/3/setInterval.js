var i = 1;
var interval = setInterval(function () {
    console.log('Hello Ruff @ ' + (i++));
}, 1000);

setTimeout(function () {
    clearInterval(interval);
}, 5500);
