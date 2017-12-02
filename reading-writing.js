var fs=require('fs');
/*blocking code sychronues read and write

var readMe=fs.readFileSync('readMe.txt','utf8');
fs.writeFileSync('writeMe.txt',readMe);
*/

/* unblocking code for reading file or reading file */
var readMe=fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt',data);
});

