Logical or Boolean Operators
      Logical Operators, also known as Boolean Operators, 
      (or the Vulcan Operators….ok, that one isn't true) evaluate an expression and return true or false.

      Check out the table below to see more details on the logical operators (AND, OR, NOT).

      Logical or Boolean Operators
      && returns true, if both operands are true. AND
      || returns true, if one of the operands is true. OR
      !  returns true, if the operand is false, if the operand is true. NOT

      You can check all types of data; comparison operators always return true or false. 
      
      Here we’ve connected two Boolean expressions with the AND operator.
document.write((4 > 2) && (10 < 15)); //output: true

      For this expression to be true, both conditions need to be true.
      - The first condition determines whether 4 is greater than 2, which is true.
      - The second condition determines whether 10 is less than 15, which is also true.


Conditional (Ternary) Operator
      Conditional, or Ternary, operators assign a value to a variable, based on some condition.
      This is what the syntax would look like: 
variable = (condition) ? value1: value2 

      And here’s an example:
var age = 42;
var isAdult = (age < 18) ? "Too young": "Old enough";
document.write(isAdult); //output: Old enough

      With logical operators you can connect as many expressions as you want or need to. 
      
      Try this program checks number whether it's Odd or Even
var number = prompt("Enter number"); 
var isEvenOrOdd = (number % 2 == 0) ? "Even": "Odd"; 
document.write(isEvenOrOdd);

      https://en.m.wikipedia.org/wiki/Elvis_operator





