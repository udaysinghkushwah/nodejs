var events=require('events');
var util=require('util');

var Person=function(name){
    this.name=name;
}
util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var merry=new Person('merry');
var amit=new Person('amit');
var pepole=[james,merry,amit];
pepole.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" said: "+ msg);
    });
});

james.emit('speak',"hi dudes");
merry.emit('speak',"i want curry");
