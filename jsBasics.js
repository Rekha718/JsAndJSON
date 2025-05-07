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

/*=============================================*/
//scope in JS
var a = 10; //global variable
function greet() {
    var b = 20; //local variable
    console.log(a); //10
    console.log(b); //20
    if(true){
        let count = 4;
    }
    //console.log(count); //block scope variable
}
greet(); //function call
console.log(a); //10
//console.log(b); //ReferenceError: b is not defined 

const pi= 3.14; //constant variable - value cannot be changed 
//pi = 3.14159; //Error

//var create global variable in function scope
//let create block scope variable in block scope
//const create block scope variable in block scope and cannot be changed



//==============================================*/
//types of functions in JS
function greet(){                        //named function
    console.log("Hello World!"); 
} 
greet();  


( function () {
    console.log("WELCOME TO JS!"); 
})(); //immediately invoked function expression (IIFE)



var myfunction = function (){
    console.log("Here function is assigned to the variable")
}
myfunction(); //function expression



example = () =>{
    console.log("Arrow function")
}
example(); //arrow function



/*==============================================*/
//parameters and arguments in functions
function add(a,b){ //function with parameters
    return a+b; 
}
console.log(add(10,20)); //function call with arguments 








