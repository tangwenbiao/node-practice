var context=Buffer.alloc(10);

context.write("a");
context.write("哈");

console.log(context.toString());

var buffer1=Buffer.from("abc");

console.log(Buffer.concat([context,buffer1]).toString());

var buffer2=buffer1.slice(0,1);

console.log(buffer2.toString());

buffer2.write("c");
console.log(buffer1.toString());