The if Statement
      Well done! You’re making great progress. On to module 3!
      Often when we write code, we want to perform different actions based on different conditions.
      And this is where conditional statements come in.
      There are a bunch of different conditionals, to cover, but we’re starting with one of the most useful: "if"
      We use if to specify a block of code that we want to be executed if a specified condition is true.
      
if (condition) {
   statements
}

      The statements will only be executed if the specified condition is true. Let’s take a look at an example:
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert("JavaScript.");
}

      You can see from the example above, 
      we’ve used the JavaScript alert() to generate a popup alert box that contains the information inside the parentheses.
      
      You don't have to use curly brackets if there is only one line of code after your if statement, for e.g.: 
if (5 > 4) 
  alert("Hello"); /* this will alert "Hello" */ 
if (5 > 9) 
  alert("Hello"); 
  alert("World!"); /* but this will alert only "World!" */

      You will get two alter messages in 1st alert message you will get "Hello" 
      and when you press OK BUTTON of 1st alert box you will see 2nd alert message where you will get "world" as the message 
      
if(var1 > var2)
{
   document.write("OK");
}

      1. Round brackets are used after an Operator like If or used for a function, eg. 
      functionForNumbers (), Since JavaScript is an interpreted language, 
      If you want the interpreter to consider functionForNumbers as a function you need (). 
      2. So the Round Brackets or () acts as in what condition the operator or function, 
      must operate and the technical term for the condition you pass inside the (Round Brackets) is called arguments. 
      3. And Curly Braces or {} acts as Statement on what should be done if the condition is satisfied.
      Just a daily life example, 
      Eg, If (No Milk In Home) { go to nearest grocery(); buy milk(); return home (); } 
      In this case (No Milk In Home) is the argument. Only if the argument is satisified it will continue. 
      But when there is milk in home the if statement is not necessary and the Interpreter will skip to the next step 
      and if there’s no next step the interpreter will stop.
      
      
      This is an example of a false conditional statement:
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alert("JavaScript.");
}
      Because the condition evaluates to false, 
      the alert statement gets skipped and the program continues with the line after the if statement's closing curly brace. 

      if is in lowercase letters. Uppercase letters (If or IF) won’t work.
      
      //Another Example: 
      var x = 10;
      var y = 55; 
      if(x > y){ 
        document.write("x is smaller than y"); } 
      else{ 
        document.write("y is greater than x"); } 
      //output : y is greater than x(Since the 1st condition is false
      

      //Example:
var num1 = "a,e,i,o,u";
var num2 = "a,e,s,r"
if (num1 == num2) {
    alert("JavaScript.");
} else{
alert("js");
    
}
if(num1[0]=num2[0])
{
    document.write("true");
}
else{
    document.write("false");
} //output: true, alert: js

      //Example:
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alert("JavaScript.");

}
else {
    alert ("10 is greater than 7")
} //output: false, alert: 10 is greater than 7


      What happens if the tested condition is false? -- The code does nothing and moves to the next section
      

EXAMPLES:     
      /*The following code will help you in understanding the various conditionals and loops and their use in different situations */
alert("Check out the code and like it if it helped you.");

--IF
      //Example 1:
var x=5;
if(x>4)
{
   document.write(" 1. As x (here x=5) is in this case is greater than 4 , <b> hence condition is evaluated as true. </b>" + "<br/>"+"<br/>") ;
}

      //Example 2:
var y=5 ;
if(y>4 && y<6) 
{
   document.write(" 2. Here also as 5 is the <b> only number(int) </b> which satisfies the above condition stated , hence we get the condition evaluated "+ "<br/>"+"<br/>");
}


--IF ELSE
function numb(x,y)
{
if (x>y)
{
document.write("3. " + x + " is greater than " + y + "<br/>"+"<br/>" ) ;
}
else 
{
   document.write("4. " + x + " is less than " + y  + "<br/>"+"<br/>" );
}
}
numb(12,10);
numb(8,10);


--SWITCH-Normal
document.write(" 5.To perform <b> normal switch </b> case : " +  "<br/>" );
document.write(" Output--> ")
var z = 4;

switch (z)
{
   case 1:
   document.write("red");
   break;
   case 2:
   document.write("green");
   break;
   case 3:
   document.write("cyan");
   break;
   case 4:
   document.write("orange" + " <br/> " + "<br/>"); //added  break only here but you get the idea! 
   break;
   case 5:
   document.write("yellow");
   break;
   case 6:
   document.write("black");
   break;
   
   default :
   document.write("white");
   
}

--SWITCH with Fallthrough

      //Example 1:
document.write(" Different cases of <b> Fallthrough : </b> -> " +"<br/>")
var u= 6;
switch (u)
{
   case 1:
   document.write(" ha ha ");
   break;
   
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   document.write(" 5.1 ha ha ha ha ha " + " <br/> ")
   break; 
   case 7:
   default:
   document.write(" not funny hmmm ");   
} 


      //Example 2:
var fruit = "mango";
switch(fruit) {
    case "apple":
    case "mango":
    case "watermelon":
    case "banana":  
        document.write(" 5.2 This is " + fruit + "." +  "<br/>" + "<br/>");
        break;
    default: 
        document.write(" Eat fruits.");
} /* Here we can see that even if the case:mango is matched at 2nd step, that case looks for a  
break statement so that it can jump out of the loop.hence it falls through the other cases untill a case with break statement is found.
Always use break statement after cases.Fall through can be utilized properly depending upon the requirement */




--FOR Loop
//for(init;condition;iteration)

document.write(" <h3> 6. The following loop will output numbers as per the condition given in \'for loop'\ : </h3> " );

function learn(x)
{
   for(i=0;i<=x;i++) 
   {
      document.write(i + " <br/>" ) ;
   }
}
learn(6);


 
--WHILE Loop 

document.write(" <h3> 7.The following while loop is easy to understand : </h3>" + "<br/>" );

function tp(q) //function declaration 
{
while(q<10)
{
   document.write( "7." + q + " The square is: " + q*q + "<br/>" );
   q++;  // If you don't declare this infinte loop will occur
}
}
tp(0);  //function call


--DO WHILE Loop

document.write( " <h3> 8. Do While Loop : </h3>" + "<br/>" );
function say()  //function declaration
{
  document.write(" Hello !" + "<br/>" );
}
var p=0;
do{
  say();     //function call
  p++;
} while(p<5);


--BREAK and CONTINUE

// Break:
 document.write(" <h3> 9. Use of break and continue : </h3> " + "<br/>");
var m;
for(m=0;m<=10;m++)
{

if(m==6)
{
  break; // terminates the loop
}
  document.write( " The number is at " + m+ "th" + " position " + "<br/>" );
}

//Continue:
document.write("<h4> Continue : </h4> " + "<br/>");
var n;
for(n=0;n<8;n++)
{

if( n===4 )
{
  continue ; //skips the statement conditioned and resumes execution
}
document.write( " The number is at " + n+ "th" + " position " + "<br/>" );
}






