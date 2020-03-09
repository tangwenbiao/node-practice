var http=require("http");
var url=require("url");
var router=require("./router");

var start=function(port,handle){
	
	http.createServer(handle).listen(port);
	
}
var defulatHandle=function(request,response){
	
	//获取路径
	var path=url.parse(request.url).pathname;
	//获取参数
	var argumentsStr=url.parse(request.url).query;
	//访问路由
	var result=router.route(path,arguments);
	
	console.log(result.code);
	if(result.code==0){
		response.writeHead(200,{"Context-Type":"text/plan"});
		response.write("ok, this good!");
		response.end();
	}else{
		response.writeHead(400,"{Context-Type:text/plan}");
		response.write("is bad!");
		response.end();
	}
}

start(8080,defulatHandle);


console.log("Running!!!!");