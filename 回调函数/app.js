var http=require('http');
http.createServer(function(request,response){
    // ���� HTTP ͷ��
    // HTTP ״ֵ̬: 200 : OK
    // ��������: text/plain
    response.setHeader('contentType','text/html');
    response.writeHead(200,{'contentType':'text/plain','test':'12344'});
    response.end('Hello World!\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');

/*setHeader��writeHead����������Ӧͷ,����������ͬ����setHeader�ᱻ����.text/plainʱ,������ɫ�ᱻ����.
* */