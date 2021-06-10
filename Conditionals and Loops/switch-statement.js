The switch Statement
      /*But what if you need to test for multiple conditions? 
      In those cases, writing if else statements for each condition might not be the best solution.

      Instead, we can use the switch statement to perform different actions based on different conditions.*/

      //Here's what that looks like:
switch (expression) {
  case n1: 
     statements
     break;
  case n2: 
     statements
     break;
  default: 
     statements
}
      /*
      The switch expression is evaluated once. 
      The value of the expression is compared with the values of each case, 
      and if there’s a match, that block of code is executed. 
      
      You can achieve the same result with multiple if...else statements, 
      but the switch statement is more effective in such situations. 
      */
    
      //Example: 
var x = 0; 
  switch (x) { 
  case 0: text = "Off"; 
     break; 
  case 1: text = "On"; 
      break; 
  default: text = "No value found"; } 
      document.write(text); 
      //It is the same as: 
var x = 0; 
  if (x === 0) { 
    text = "Off"; } 
  else if (x === 1) { 
    text = "On"; } 
  else { 
    text = "No value found"; } 
    document.write(text); 
    //take notice that switch cases use strict comparison (===)

      /*
      Switch uses strict comparison, 
      and the reason case age = "12" works is that the prompt field always returns a string. 
      You are evaluating a string from the prompt against the numbers in the case statements. 
      You need to convert the prompt return to a number before running the switch so it doesn't go to default. 
      for example: var age = Number(prompt(" Please enter...")); The switch will work after this.
      
      The switch statement can be used to replace multiple if else statements.
      
      Use switch instead of if when: 
      1- You are comparing multiple possible conditions of an expression and the expression itself is non-trivial. 
      2- You have multiple values that may require the same code. 
      3- You have some values that will require essentially all of another value's execution, plus only a few statements. 
      */
      
      //Example:
var a = 2+2
switch (a) {
  case 3:
    alert("Not enough!") 
    break  
  case 4:
    alert("Exactly!")
    break
  case 5:
    alert("Too many!")
    break
  default:
    alert("I don't know")
}
      //Example:      
switch (digit) { 
  case "0" // listen again 
     break; 
  case "1": // call Art Department 
     break; 
  case "2": // call Science Department 
     break; 
  case 3: // call Music Department 
     break; 
  default: // not identified digit - digit "4" to digit "9" }
  
      //Example:
grades.js // Set the student's grade 
const grade = 87; 
switch (true) { 
  // If score is 90 or greater 
  case grade >= 90: 
    console.log("A"); 
    break; 
  // If score is 80 or greater 
  case grade >= 80: 
    console.log("B"); 
    break; 
  // If score is 70 or greater 
  case grade >= 70: 
    console.log("C"); 
    break; 
  // If score is 60 or greater 
  case grade >= 60: 
    console.log("D"); 
    break; 
  // Anything 59 or below is failing 
  default: 
    console.log("F"); }
      
      
      //Example:
var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday"); //output
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}
      //You can have as many case statements as you need.
      
      //"case" is basically "in the case that" like "in the case that the variable 'equals' x, do this; 
      //in the case that the variable 'equals' y, do that" and so on 
    
      //Example:
var day = 2; 
switch (day) { 
  case 1: 
    document.write("Monday"); 
    break; 
  case 3: // notice i replaced 2 by 3 
    document.write("Tuesday"); 
    break; 
  case 2: // notice i replaced 3 by 2 
    document.write("Wednesday"); 
    break; 
  default: 
    document.write("Another day"); } // output is Wednesday
    
      //Different Example:    
var date = new Date();
var day = date.getDay();
var name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];
document.write("Today is " + name); //Today is ...
    
      //Example:
var num1=parseInt(prompt("Enter the first number:"));
var opr=prompt("Enter the operation you want:");
var num2=parseInt(prompt("Enter the second number:"));
var ans;
switch(opr)
{
  case '+':
    ans=num1+num2;
    break;
    
  case '-':
    ans=num1-num2;
    break;
    
  case '*':
    ans=num1*num2;
    break;
    
  case '/':
    ans=num1/num2;
    break;
  default :
    document .write("\nInvalid Operator!");
    break;
}
document.write(ans);

    //Example:
var x1 = 1; 
var x2 = 2; 
var x3 = 3; 
  if(x1 > x2){ 
    document.write("days"); } 
  else if(x1 < x2){ 
    document.write("weeks"); } 
  else if(x2 > x3){ 
    document.write("months"); } 
  else{ document.write ("today"); }
    
     //Example:
varx=5; 
var y=5; 
switch (true) { 
  case (x == y): 
    alert('zzzz'); 
    break; 
  case (x > y): 
    alert('cccc'); 
    break; 
  case (x < y): 
    alert('gggg'); 
    break; 
  default: 
    alert('bbbb'); } 
    //if you want to compare variables that are numbers, 
    //you have to use a Boolean argument with the switch statement.
    
    //How many "case" statements are usually used in the "switch" statement?
    //One for each possible answer
    
    
