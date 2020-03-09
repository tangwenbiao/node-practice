var utils=require("util");
var Person=require("./person");
var Student=require("./Student");


utils.inherits(Student,Person);

var person=new Person("a",10);

var student=new Student("b");

person.toSay();
person.toSee("money!");
student.toSay();
Person.toSay();
Student.toSay();

