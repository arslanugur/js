Function Parameters
      /*
      Calling a function is just like summoning your Pokémon. 
      First, Pikachu, I choose you! Here, Pikachu is the name of the function. 
      Secondly, Pikachu, use Thunderbolt! Thunderbolt is the parameter of Pikachu. 
      So, the code looks like: Pikachu(Thunderbolt).
      */
//Code:
function call(pokemon) 
{ 
  document.write(pokemon + " I choose you"); 
} 
call("Pikachu") //Output: Pikachu I choose you

//Code:
function charizard(selectMove) 
{ 
  document.write("Charizard, use " + selectMove + "!") 
} 
charizard("Fire Spin") //after called function: Charizard, use Fire Spin!
  
      //Functions can take parameters.
      //Function parameters are the names listed in the function's definition.

      //Syntax:
functionName(param1, param2, param3) {
   // some code
}

//As with variables, parameters should be given names, which are separated by commas within the parentheses.

//to create a parameter - write a variable name in the parentheses
//a parameter technically is a variable,  it takes values from arguments (when calling function)

//A parameter can not be a constant. function name(2,6){ }
//You can however pass an *argument* that is a constant to satisfy a parameter.
function repeat(2) {} //not a good function definition but: 

//a correct definition followed by various legal calls of the repeat() function.
function repeat(whatever) { 
  alert(whatever); } 
  repeat(2); 
  repeat("hello"); 
  repeat(someVariable); 

//Parameter is nothing but a variable and argument is nothing but a value.

//https://stackoverflow.com/a/156787

//Example:
function greet(who) 
{ 
  console.log("Hello " + who) 
} 
greet("Harry"); //hello harry


/*
Parameters operate almost like variables, except you list parameters when defining the function 
and when you call that function at a later point, you then assign values to the parameters. 
This allows different outputs from the same function. 
*/

//DEFINE the function with parameters 
function sayHello(name, age); { 
  alert("Hi "+ name +", you are " + age + " y o!); } 
          //CALL the function and assign values to the parameters 
 
sayHello("Kanye", 39); //output: Alerts: "Hi Kanye, you are 39 y o!"

//Example:
// this function require an argument value
function myFunction(x) {
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

/* define a function with two parameters*/
function sayHi(name, age) {
  document.writeln( name + " is " + age + " years old.");
}

// calling the function and assigning the values 
sayHi("Sam", 35);
  
  
//Using Parameters
      //After defining the parameters, you can use them inside the function.
function sayHello(name) {
    alert("Hi, " + name);
}

sayHello("David");
      //This function takes in one parameter, which is called name. 
      //When calling the function, provide the parameter's value (argument) inside the parentheses.
      //Function arguments are the real values passed to (and received by) the function.  

      //When and how is the parameter used? 
      //By calling the function and placing the value in the parentheses
  
 
//Example: for the usability of the same function but with different parameters.  
function circle_Area(radius) 
{ 
  var pi = 3.14159265; 
  my_Area = pi*radius*radius;
  document.write("The area is : " + my_Area);  
} //you can call it once with
radius=10;
circle_Area(10); 
// the output will be..The area is : 314.159265 
// you can use the same code with another radiaus value 
// like radius = 20; circle_Area(20);
// the output will be.. The area is : 1256.63706
  
    
//You can call a function inside a function which is called recursive(calling itself) function. 
//It is very useful if we want to find something like 10!. 
//We have to multiply like this 10*9*8*....*1 
//Code: 
function factorial(a){ 
  if(a == 1) 
    return 1; //breaks the loop return

a*factorial(a-1); } 
var number = 10; 

function factorial(a){ 
  return (a == 1) ? 1 : 
  a*factorial(a-1); } 
  var number = 10; 
  document.write(factorial(number));
//you can also use prompt to take input from user document.write(factorial(number)); 
//Above function can be written using ternary operator. 


  
//Function Parameters
      //You can define a single function, and pass different parameter values (arguments) to it.  
      //Syntax: 
function name([param[, param[, ... param]]]) 
{ 
  statements
}
      //Example:
function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("David");
sayHello("Sarah");
sayHello("John");

      //This will execute the function's code each time for the provided argument.

      //Code: 
function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("Javascript");
sayHello("html");
sayHello("css");

      //to declare a function and call it, by passing "Test" as the argument:
function  myAlert(txt) {
   alert("Hello " + txt);
}
myAlert("Test");


  
// a basic function that accepts two arguments and handles where one or both are missing
function sayHello(name, age) {
// neither argument passed
if(name==undefined && age==undefined){
 document.write("We know nothing about you!");
}
// no name passed to the function
else if(name==undefined){
    document.write("Hello mystery person, you are " + age + " years old.");
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
      
      
      
