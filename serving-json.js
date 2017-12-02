var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
res.writeHead(202,{'Content-type':'application/json'});
var myObj={
    name:'UDAY',
    job:"Front end developer",
    age:29
}
res.end(JSON.stringify(myObj));
});
server.listen(3000);