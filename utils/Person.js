var globalName;

var Person=function(name,age){
	this.name=name;
	this.age=age;
	globalName=name;
	this.toSee=function(data){
		console.log(data);
	}		
}



Person.toSay=function(){
	console.log("hh");
}

Person.prototype.toSay=function(){
	console.log(globalName);
}

module.exports=Person;