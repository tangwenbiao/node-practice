var fs=require('fs');

fs.readFile('SimpleSee.txt',see);
console.log("run end!!!");

function see(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data.toString());
	}
}