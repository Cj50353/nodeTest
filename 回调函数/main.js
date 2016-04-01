/**
 * Created by cljin on 2016/3/28.
 */
/*阻塞代码实例
* */
/*var fs=require('fs');
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log('执行结束');*/

/*非阻塞代码实例
node.js异步编程使用回调,没有阻塞或等待文件的I/O操作.
* */
var fs=require('fs');
fs.readFile('input.txt', function (err,data) {
    if(err)return console.log(err);
    console.log(data.toString());
})
console.log("程序执行结束!");