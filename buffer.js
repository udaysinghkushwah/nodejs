//create zero-filled  buufer of length 10
const buf1=Buffer.alloc(10);
console.log(buf1);

//create a buffer of length 10 filled with 0X1s
const buf2 =Buffer.alloc(10,1);
console.log(buf2);