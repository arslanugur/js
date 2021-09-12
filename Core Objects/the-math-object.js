The Math Object
      //The Math object allows you to perform mathematical tasks, and includes several properties. 

Property  | Description
---------------------------
E         |Euler's constant
LN2       |Natural log of the value 2
LN10      |natural log of the value 10
LOG2E     |The base 2 log of Euler's constant (E)
LOG10E    |The base 10 log of Euler's constant (E)
PI        |Returns the constant PI

document.write(Math.PI); //output: 3.141592653589793 

      //Math has no constructor. There's no need to create a Math object first.


Math Object Methods
      //The Math object contains a number of methods that are used for calculations: 

Method | Description
-------------------------
abs(x)      | Returns the absolute value of x
acos(x)     | Returns the arccosine of x, in radians
asin(x)     | Returnsthe arcsine of x, in radians
atan(x)     | returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x)  | Returns the arctangent of the quotient of its arguments
ceil(x)     | Returns x, rounded upwards to the nearest integer
cos(x)      | Returns the cosine of x (x is in radians)
exp(x)      | Returns the value of E^x
floor(x)    | returns x, rounded downwards to the nearest integer
log(x)          | Returns the natural logarithm (base E) of x
max(x,y,z,..,n) | Returns the number with the highest value
min(x,y,z,..,n) | Returns the number with the lowest value
pow(x,y)        | Returns the value of x to the power of y
random()        | Returns a random number between 0 and 1
round()         | Rounds x to the nearest integer
sin(x)          | Returns the sine of x (x is in radians)
sqrt(x)         | Returns the square root of x
tan(x)          |Returns the tangent of an angle 


      //For example, the following will calculate the square root of a number.
var number = Math.sqrt(4); 
document.write(number); //output: 2

      /*To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. 
        Then multiply the number by 10, and then take Math.ceil() from it: Math.ceil(Math.random() * 10).*/


var number = Math.sqrt(prompt ("enter your number")); 
document.write(number); //This code accepts value from a user

      //In the Math Object, which of the following methods is used to calculate the square root --> sqrt

      //Let's create a program that will ask the user to input a number and alert its square root.
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer); //input:64, output:8
    
      //Math is a handy object. You can save a lot of time using Math, instead of writing your own functions every time.

//apply the methods
document.writeln(" || Some basic stuff: ");
document.writeln("Math.sqrt(4): ");
var number = Math.sqrt(4);
document.writeln(number);

document.writeln(", Math.pow(2,4): ");
number = Math.pow(2,4);
document.writeln(number);

document.writeln(", Math.round(6.3): ");
number = Math.round(6.3);
document.writeln(number);

document.writeln(", Math.ceil(6.3): ");
number = Math.ceil(6.3);
document.writeln(number);

document.writeln(", Math.round(6.7): ");
number = Math.round(6.7);
document.writeln(number);

document.writeln(", Math.floor(6.7): ");
number = Math.floor(6.7);
document.writeln(number);

document.writeln(", Math.abs(-4.2): ");
number = Math.abs(-4.2);
document.writeln(number);

document.writeln(" || Some advanced stuff: ");
var myArray = new Array(10);
document.writeln("10 random array elements: ")
for (i = 0; i < myArray.length; i++) {
    myArray[i] = Math.round(Math.random() * 100);
    document.writeln(myArray[i]);
}

document.writeln(" => Max array element:");
number = Math.max.apply(Math, myArray);
document.writeln(number);

document.writeln(", Min array element:");
number = Math.min.apply(Math, myArray );
document.writeln(number);

document.writeln(" || Some useful constants:");
document.writeln("Math.PI: ");
document.writeln(Math.PI);
document.writeln(", Math.E: ");
document.writeln(Math.E);

      
//Code: Square Finder
var n = prompt("Square root finder\n\nEnter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);


Math.sqrt(81); // --> 9


