var events=require('events');

var emitter=new events.EventEmitter();

emitter.on("test",bind);

emitter.emit("test");

emitter.removeListener("test",bind);

emitter.emit("test");

setTimeout(function(){
	emitter.on("test",bind);
	emitter.emit("test");
	
	emitter.addListener("test",bind2);
	emitter.emit("test");
	
},2000);


function bind(){
	console.log("bind!!!");
}

function bind2(){
	console.log("bind2");
}

function unbind(){
	console.log("unbind!!");
}