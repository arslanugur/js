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
    
    //Example:
var option = prompt("Welcome to Javascript R Us. Please press 1 for Accounts, 2 for Orders, 3 for Sales or 4 for all other enquities ");
switch (option) {
    case "1":
        document.write("Hi, please give me your credit card number");
        break;
    case "2":
        document.write("Hi, please tell me how many scripts you need?");
        break;
    case "3":
        document.write("Hi, I will sell you a script at a good price");
        break;
    default:
        document.write("Hi, what can I help you with?");
}

    
The break Keyword
      //So we have learned that the switch statement tests a code block, 
      //but we won't always want it to test the whole block. 
      //The break keyword essentially switches the switch statement off.

      //Breaking out of the switch block stops the execution of more code and case testing inside the block. 
            
      //Usually, a break should be put in each case statement.
            
      //Example:
var color ="red"; 
switch(color) { 
  case "blue": 
     document.write("This is blue."); 
     break; 
  case "red": 
     document.write("This is red"); 
     break; 
  case "green": 
     document.write("This is green."); 
     break; 
  case "orange": 
     document.write("This is orange."); 
     break; 
  default: 
     document.write("Color not found."); } 
     
     //Example:
var a = prompt("What flower do you know which is red?:"); 
switch(a) { 
   case "rose": 
      document.write("Wow that's a cool flower"); 
      break; 
   default: 
      document.write("Wow that might be a cool flower too!!"); 
      break; }

      //Example:
function main() { 
var themeNumber = parseInt(readLine(), 10) 
/* 1 - Light 2 - Dark 3 - Nocturne 4 - Terminal 5 - Indigo */ 
switch (themeNumber) { 
      case 1: console.log("Light"); 
            break; 
      case 2: console.log("Dark"); 
            break; 
      case 3: console.log("Nocturne"); 
            break; 
      case 4: console.log("Terminal"); 
            break; 
      case 5: console.log("Indigo"); } }
      
      //Example:
var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("<h1>Tuesday</br></h1>");
        
    case 2:
        document.write("<i>Wednesday</i>");
        break;
    default:
        document.write("Another day");
}

var day = "second";
switch (day) {
    case "first":
    document.write("NoN");
    break;
    case "third":
    alert("Hello!");
    break;
    case "second":
    document.write("<font color=blue><h1><br>\"Hello,\n</font>" + "<font color=red>world!\"</h1></font>");
    break;
    default:
    document.write("Hi");
    
}

var a = prompt("Enter the day of the week");
switch (a) {
    case a == "Monday" || "monday":
    document.write("<h2>Today is Monday</h2>");
    break;
    case a == "Tuesday" || "tuesday":
    document.write("<h2>Today is Tuesday!</h2>");
    break;
    case a == "Wednesday" || "wednesday":
    document.write(" <font color=red><h2>Today is Wednesday</h2></font");
    break;
    case a == "Thursday" || "thursday":
    document.write("<h2>Today is Thursday</h2>");
    break;
    case a== "Friday"||"friday":
    document.write("<h2>Today is Friday</h2>");
    break;
    case a == "Saturday"||"saturday":
    document.write("<h2>Today is Saturday</h2>");
    break;
    case a == "Sunday"||"sunday":
    document.write("<h2>Today is Sunday</h2>");
    break;

    default:
    document.write("Ok,\n Try it again 😴");
}

      //Example:
      //What’s the output of this code?
var x = 3;
switch (x) {
  case 1:
    document.write(x);
    break;
  case 2:
    document.write(x+2);
    break;
  default:
    document.write(x+5);
}

      /*The answer is 8 coz of "default" statement used here;
        The switch goes on finding the matching case until it finds '3';
        since there is no case 3 like case 1 and case 2 hence default statement is executed..*/
      
      
The default Keyword
      //Often there will be no match, but we still need the program to output something...
      //for this we use the default keyword, which specifies the code to run if there’s no case match.

      //Like this:
var color ="yellow";
switch(color) {
    case "blue": 
        document.write("This is blue.");
        break;
    case "red":     
        document.write("This is red.");
        break;
    case "green": 
        document.write("This is green.");    
        break;
    case "orange":  
        document.write("This is orange.");    
        break;
    default: 
        document.write("Color not found.");
}

      //The default block can be omitted, if there is no need to handle the case when no match is found. 
      
      //The "default" statement is used When no match is found
      
      
      
      
      
      
