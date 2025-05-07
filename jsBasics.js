// Output Statements in JS
console.log("Hello World!"); 
//document.write("Hello World!"); 
//alert("Hello World!");
//document.getElementById("h1").innerHTML = "Hello World!"; 
/*=============================================*/

//Input Statements in JS
//var name = prompt("Enter your name:")
//console.log(name); 

/*=============================================*/
//Data types in JS
//primitive types
var a = 10; 
var name="John"; 
var isTrue = true; 
var n = null; 
var u; 
var name1 = Symbol("John");   //represents a unique identifier
console.log(typeof a); 

//non-primitive types
var arr = [1, 2, 3]; //array
var obj = {name: "John", age: 30}; //object
function greet() { //function
    console.log("Hello World!"); 
} //function    
greet(); //function call
console.log(typeof greet); //function type

/*=============================================*/
//loose and strict equality
var a = 10;
var b = "10";
console.log(a == b); //true (loose equality)
console.log(a === b); //false (strict equality)