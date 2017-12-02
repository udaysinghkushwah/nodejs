var counter=function(arr){
    return 'Ther are'+arr.length+" elements in this array";
};
var adder=function(a,b){
    return `The sum of the 2 varibale is ${a+b}`;
};
var pi=3.142;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;