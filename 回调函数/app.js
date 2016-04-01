var http=require('http');
http.createServer(function(request,response){
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'contentType':'text/plain'});
    response.end('Hello World!\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');

