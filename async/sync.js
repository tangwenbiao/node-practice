var fs=require('fs');
var file=fs.readFileSync("SimpleSee.txt");

console.log(file.toString());
console.log("is ok!");