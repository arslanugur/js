Arithmetic Operators
      //The name might be a bit of a giveaway but, 
      //Arithmetic operators pretty perform arithmetic functions on numbers (both literals and variables).

/*
Operator  Description    Example
---------------------------------
      +	  Addition	 25 + 5 = 30
      -	  Subtraction	 25 - 5 = 20
      *	  Multiplication 10 * 20 = 200
      /	  Division	 20 / 2 = 10
      %	  Modulus	 56 % 3 = 2
     ++	  Increment	 var a = 10; a++; Now a = 11 
     --	  Decrement	 var a = 10; a--; Now a = 9
*/
      //Below you can see the addition operator (+) in action determining the sum of two numbers.
var x = 10 + 5;
document.write(x);

      //You can add as many numbers or variables together as you want or need to.
var x = 10;
var y = x + 5 + 22 + 45 + 6548;
document.write(y);

      //You can get the result of a string expression using the eval() function, 
      //which takes a string expression argument like eval("10 * 20 + 8") and returns the result. 
      //If the argument is empty, it returns undefined.
                                               
      //eval() function works as follows : 
var x = eval("10*20-100"); 
document.write(x); //output: 100 in a string

var x = '100' 
var y = '20' 
alert(x+y) //output: 10020 



Multiplication
      //We use the * operator to multiply one number by the other.
      //Like this:
var x = 10 * 5;
document.write(x);

      //10 * '5' or '10' * '5' will give the same result. 
      //But trying to multiply a number with string values that aren’t numbers, 
      //like 'me' * 5 will return NaN (Not a Number).
var x = 10 + 5;     //output: 15
var x = "10" + 5;   //output: 105
var x = 10 + "5";   //output: 105
var x = "10" + "5"; //output: 105


Division
      //We use the / operator to perform division operations.
      //Like this:
var x = 100 / 5;
document.write(x);

      //Beware of situations where there could be a division by 0, things get messed up when we do impossible math!


The Modulus
      //The Modulus (%) operator returns the division remainder (what’s left over).
      //Like this:
var myVariable = 26 % 6;
document.write(myVariable);  //output: 2

      //In JavaScript, we can use the modulus operator on integers AND on floating point numbers.

      
Increment & Decrement
      Increment ++
      //The increment operator increases the numeric value of its operand by 1. 
      //When placed before the operand, it’ll return the incremented value. 
      //When placed after it, it’ll return the original value and then increments the operand.

      Decrement --
      //The decrement operator decreases the numeric value of its operand by 1. 
      //What are increment and decrement are used 
      //to change the sign of the number to "+" or "-" Adding or subtracting 1 from a number
      //When placed before the operand, it’ll return the decremented value. 
      //When placed after the operand, it’ll return the original value and then decrements the operand.

      //Some examples:
Operator    Description     Example               Result
-----------------------------------------------------------------
var++	    Post Increment  var a = 0, b = 10;    a = 10 and b = 11
			    var a = b++;
++var	    Pre Increment   var a = 0, b = 10;    a = 11 and b = 11
			    var a = ++b;
var--	    Post Decrement  var a = 0, b = 10;    a = 10 and b = 9 
			    var a = b--;	
--var	    Pre Decrement   var a = 0, b = 10;    a = 9 and b = 9
			    var a = --b;

      //You can change the order of the arithmetic operations by using parentheses.
      //Like this: 
var x = (100 + 50) * 3;



               


