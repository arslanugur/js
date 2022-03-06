Function Return
      //A function can have an optional return statement. 
      //It is used to return a value from the function.

      //This statement is useful when making calculations that require a result. 

      //When JavaScript reaches a return statement, the function stops executing.

      //Example:
function addNumbers(a, b) { 
   var c = a+b; 
   return c; 
   
   var d = a*b; 
   return d; 
 } 
document.write( 
  addNumbers(40, 2) ); //output: 42

      //When is the "return" statement most frequently needed?
      //When you need to make a calculation and receive the result

function sumnumber(a, b){ 
  return (a+b); } 
var resulted = sumnumber(3, 5); //output: 8
alert(resulted);


      //Example: a basic function that accepts two arguments and handles where one or both are missing
function sayHello(name, age) {
if(name==undefined && age==undefined){ // neither argument passed

 document.write("We know nothing about you!");
}
// no name passed to the function
else if(name==undefined){
    document.write("Hello, you are " + age + " years old.");
}
// no age passed to function
else if(age==undefined){
    document.write("Hello " + name + ", your age is unknown.");
}
// both parameters passed to the function
else{
    document.write("Hello " + name + ", you are " + age + " years old.");
    }
}

sayHello(); // no parameters passed
document.write("<br>");
sayHello(null,20); // no name passed (got an error if I did't use 'null')
document.write("<br>");
sayHello("John", 20); // both parameters passed
document.write("<br>");
sayHello("Duncan"); // no age passed


      //Use the return statement to return a value.
      //For example, let's calculate the product of two numbers, and return the result.
      //Example:
function myFunction(a, b) {
    return a * b;
}

var x = myFunction(5, 6); 
      //myFunction(7, 9);
document.write(x); //output: 30

      //If you do not return anything from a function, it will return undefined.

      //Example:
function max(x,y){ 
  if(x > y) { 
    return x; 
} else { 
    return y; } } 

alert(max(2,3));

      //Example:
function addNumbers(a, b) {
    var c = a+b;
    return c;
}
document.write( addNumbers(40, 2) ); //output: 42

      //The document.write command outputs the value returned by the function, which is the sum of the two parameters.

      ///Example: to have the result of the function below displayed on the screen:
function substrNumbrs(first, second)
{
  var result = first - second;
  return result;
}
document.write(substrNumbrs(10, 5));

      //Is it possible to return 2 (or more) values from one function
      //Only a single value can be returned from a function. 
      //However, that value could be an object containing multiple properties which could contain multiple values. 
      //Example: return { name: "Bob", age: 30, gender: "male" }
      //The recursive function implies a return statement holding a function takes up a variable 
      //and returns a value at the end, this may not be as straight as returning a variable, 
      //but the fact that the recursive function takes a variable "a" 
      //and returns it's value after a sequence is what i meant by the relation

      //Example:

/*
Recursion Example: - involves adding new stacks for each iteration. 
                   - involves reaching the break condition first, then accumulating the sum of each call return. 
do...while Example:- involves a single stack. 
                   - involves accumulating the sum total as it's iterating each loop */


// Recursion is a loop via call stacks
let testValue = 3

const r = num => { 
  return (num > 0) // Break condition
    ? 1 + r(--num) // Decrementing value
    : 1            // Min value is 1
                   // - Is also innermost value
}

console.log(`Recursive loop: r(${testValue})`)
console.log(` - Result: ${r(testValue)}`)

const f = num => {
  let result = 0

  do {
    result++
  } while(--num >= 0) 

  return result
}

console.log("------")
console.log(`do...while loop: f(${testValue})`)
console.log(` - Result: ${f(testValue)}`)

/*
Recursive loop: r(3) 
 - Result: 4 
------ 
do...while loop: f(3) 
 - Result: 4  */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures



      //Examples:
      //OBJECT LITERAL NOTATION
console.log(" OBJECT LITERAL NOTATION")

var NS_1 = NS_1 || { 
 // we can access every property
 // we can build a hierarchy

 
 obj: function ( name , value )
 { 
  this.name  = name;
  this.value = value ;
  this.call  = function(){ NS_1.message( this );};
 },
 

 UTILS: {
  make: function ( name , value ){ return new NS_1.obj( name , value );} ,
 
  PROPERTIES: {
   display: function ( obj ){ console.log( obj.name + obj.value );}
  }
     
 }
}

// we can also add methods (or hierarchy) outside 
NS_1.message = function ( obj ){ console.log( obj.name + ': hello world!' ); };

var a = NS_1.UTILS.make("Billy" , 99 );
NS_1.message( a );
a.call();
NS_1.UTILS.PROPERTIES.display( a );


      //MODULE PATTERN
console.log("")
console.log("MODULE PATTERN")
var NS_2 = ( function (){
 // private properties/methods
 function _obj ( name , value )
 { 
  this.name  = name;
  this.value = value ;
  this.call  = function(){ _message( this );};
 }
 
 function _message ( obj ){ console.log( obj.name + ': hello world!' ); }
 
 function _make ( name , value ){ return new _obj( name , value );} 
 
 function _display ( obj ){ console.log( obj.name + obj.value );}
 
 return {
  // public interface with nested namespaces hierarchy
  UTILS: {
   make        : _make,
   PROPERTIES  : {
    display     : _display    
   }
  }   
 };
})(); // <== characteristic of the module pattern

var b = NS_2.UTILS.make("Charly" , 66 );
b.call();
NS_2.UTILS.PROPERTIES.display( b );
// NS_2._message( b ); // error! it's private!



      //IIFE: Immediately Invoked Function Expression
console.log("")
console.log("IIFE")
var NS_3 = NS_3 || {};
( function( lib ){
 function _obj ( name , value )
 { 
  this.name  = name;
  this.value = value ;
  this.call  = function(){ _message( this );};
 }
 
 function _message ( obj ){ console.log( obj.name + ': hello world!' ); } 
 
 function _make ( name , value ){ return new _obj( name , value );} 
  
 function _display ( obj ){ console.log( obj.name + obj.value );}
 
 
  // public interface 
 
 lib.make       =  _make;
 
 lib.display    = _display;
 
    
})( NS_3 );


var c = NS_3.make("Sberla" , 88 );
c.call();
NS_3.display( c );

      //INJECTION
console.log("")
console.log("INJECTION")

var NS_4 = NS_4 || {};

( function(){
      // private 
 function _obj( name , value )
 { 
  this.name  = name;
  this.value = value ;
  this.call  = function(){ _message( this );};
 }
 
 function _message( obj )
 { 
  console.log( obj.name + ': hello world!' ); 
 }
    
      // public 
 this.make = function ( name , value )
 { 
  return new _obj( name , value );
 }

}).apply( NS_4 );


      // add module
( function (){
 this.display = function ( obj )
 { 
  console.log( obj.name + obj.value );
 }

}).apply( NS_4 );

var d = NS_4.make("Oxford" , 11 );
d.call();
NS_4.display( d );
