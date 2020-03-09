

var say=function(){
	
	this.name;
	
	this.setName=function(thyName){
		name=thyName;
	}
	
	this.print=function(){
		console.log(name);
	}
	
}

module.exports=say;