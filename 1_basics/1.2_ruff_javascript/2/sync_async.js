/* 同步操作 */
var content = readFile(...);
// 阻塞等待读取成功

/* 异步操作 */
readFile(..., function (content) {
    // 读取成功，进入这里
});
