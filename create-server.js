var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    res.writeHead("202",{'content-type':'text/plain'});
    var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf-8');
    myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');