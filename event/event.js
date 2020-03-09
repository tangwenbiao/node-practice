var event=require('events');
var emitter=new event.EventEmitter();

emitter.on("test",onReceived);

emitter.emit('test',"one","two");

function onReceived(context1,context2){
	console.log("this event received!!");
	console.log("data1："+context1);
	console.log("data2:"+context2);
}

console.log('this ok!');