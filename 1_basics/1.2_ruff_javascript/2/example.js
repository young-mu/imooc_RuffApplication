var add = function (arg1, arg2, callback) {
    callback(arg1 + arg2);
};

add(10, 20, function (sum) {
    console.log(sum); // 30
});
