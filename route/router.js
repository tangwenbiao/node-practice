var url=require("url");

exports.route=function(pathname,arguments){
	console.log("paht:"+pathname);
	console.log("argument:"+arguments);
	return result("this ok!",0)
}

var result=function(data,code){
	this.data=data;
	this.code=code;
	return this;

}
