Multiple Parameters
      //You can define multiple parameters for a function by comma-separating them. 
function myFunc(x, y) {
   // some code
}

      //The example above defines the function myFunc to take two parameters.

      //to set parameters, you can use argument. 
      //they are just semantic definitions, useful when communicating about your code. 


      //To define multiple parameters for a function and make it make you input values for all parameters: 
      //Example:
function myFunction(name, age, skills) { 
  alert("Hi " + name + ". You are " + age + " years old. And you got an amazing set of skills that include: " + skills); 
} 

var name = prompt(); 
var age = prompt(); 
var skills = prompt(); 

myFunction(name, age, skills);

      //Example: Adding names, numbered 
var num = 1; //counter

function myName(firstName, lastName) {

    console.log(num + ". " + " Hi, " + firstName + lastName + ".");
    num++;
}

myName("Fateho ", "Ali");
myName("Wazed ", "Prodhan");

console.log("");

myName("Ro ", "Ra");
myName("Fa ", "Ai");

      //Example:
var a=6; 
var b=6; 
function sayHello(a,b){ 
    var x=a+b; 

document.write(x); } 

sayHello(a,b); //output: 12

      //-Datatypes contain values 
      //-Parameters contain arguments 
      //So -Datatype is parameter -value is argument


      //The parameters are used within the function's definition.
function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
      //Function parameters are the names listed in the function definition.

      //Example:
function test(x, y) {
  if(x > y) {
    document.write(x);
  }
  else {
    document.write(y);
  }
}

test(5, 8);     //output: 8

      //When calling the function, provide the arguments in the same order in which you defined them
      //Example:
function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
}

sayHello("John", 20)

      //If you pass more arguments than are defined, they will be assigned to an array called arguments. 
      //They can be used like this: arguments[0], arguments[1], etc.

      //Example:
function myFunction(x) {   // this function require an argument value
    alert("Calling a Function! " + x);
}
// passing the value to the function 
myFunction(2); // if i remove the value will print the alert with 'undefined' value 

/* define a single function, and pass different parameter values (arguments) to it*/
function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("Sam");
sayHello("Nemi");
sayHello("Elisha");

function sayHi(name, age) { // define a function with two parameters
  document.writeln( name + " is " + age + " years old.");
}

sayHi("Sam", 35); // calling the function and assigning the values 

      //Example: to create a function alerting the sum of the two parameters.
function myFunction(x, y)
{
  alert(x + y);
}

      //Example:
function operations(num1, num2) {

alert (num1+num2);

suma =parseInt(num1)+ parseInt(num2);
    alert("Sum= " +sum );
resta =parseInt(num1)- parseInt(num2);
    alert("Rest= " +rest );
multip =parseInt(num1)* parseInt(num2);
    alert("Multiple= " +multip );
div =parseInt(num1)/ parseInt(num2);
    alert("Division= " +div );
}

num1= prompt("Input the 1st num");
num2= prompt("Input the 2nd num");

operations (num1, num2);

      //After defining the function, you can call it as many times as needed.
      //JS functions do not check the number of arguments received.

      //If a function is called with missing arguments (fewer than declared), 
      //the missing values are set to undefined, 
      //which indicates that a variable has not been assigned a value.

