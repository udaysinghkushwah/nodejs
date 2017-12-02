var fs=require('fs');
//remove a file
//fs.unlink('writeMe.txt');

//create directory

/* 
fs.mkdirSync('stuff'); //create directory
fs.rmdirSync('stuff'); //remove directory 
*/

//create asynchronues directory and file
/*
fs.mkdir('stuff',function(){
fs.readFile('readMe.txt','utf-8',function(err,data){
    fs.writeFile('./stuff/writeMe.txt',data);
});
});
*/

//remove directory
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff');
});