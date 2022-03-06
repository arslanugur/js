The else Statement
      //We can use the else statement to specify a block of code that will execute if the condition is false. Like this:
if (expression) {
   // executed if condition is true
}
else {
   // executed if condition is false
}

      //You can skip the curly braces if the code under the condition contains only one command.
      
      //Example:
var num1 = prompt("Please enter the first number"); 
var num2 = prompt("please enter the second number"); 
if(num1>num2){ 
  alert("First Number greater than Second number"); 
} 
else if(num1==num2){ 
  alert ("First Number equal to Second Number"); } 
else{ 
  alert("Second Number is greater than First Number"); } 

      //Another Example:
var myNum1 = prompt('Enter "1st number"'); 
var myNum2 = prompt('Enter "2nd number"'); 
if (myNum1 > myNum2) { 
  alert("1st number is greater"); } 
if (myNum1 == myNum2){ 
  alert ("both are equal") } 
else { 
  alert("2nd number is greater"); }

      //If you play with the var values and test the outcome: 
var audi = 6600; 
var toyota = 6500; 
if (audi > toyota) { 
  document.write("Audi is more expensive than Toyota."); 
} 
else if (audi == toyota) { 
  document.write("Audi and Toyota have the same price."); 
} else { 
  document.write("Audi is cheaper than Toyota."); }

      //Example:
var firstNumber = parseInt(prompt ("Please input a whole number"));
var secondNumber = parseInt(prompt ("Please input another whole number"))
if (firstNumber < secondNumber) {
    note(" less than ");
    }
else if (firstNumber > secondNumber) {
    note(" more than ");
    }
else if (firstNumber == secondNumber) {
    note(" the same as ");
    }
else {
    alert( "This only works with numbers, please run again");
    }
function note(res){
   alert("Your initial input ("+ firstNumber + "), is "+ res + secondNumber  + ".") 
}


      //Example:
var a = prompt("Enter Name"); 
var b = prompt("Password"); 
var c = a.length; 
if(c<= 8){ 
  alert("name is too short"); 
}
else{ 
  alert("You are logged in"); }


      //Example:
var age = prompt("Your Age:"); 
var alcohol = 18;
if(age > alcohol){ 
  alert("May drink alcohol") 
} 
else }      //if(alcohol>age) { 
  alert("Too young for alcohol")
}

      //Example:
var age = 25;
if(age >= 18) {
   alert("Allowed.");
}
else {
   alert("Not allowed.");
}


      //Example:
var age = prompt ('How old are you?') 
if (age < 18) { 
  alert("You are very young"); 
} 
else { alert("you are young too"); 
}


      //There's another way to do this check using the ? operator: a > b ? alert(a) : alert(b).
var myNum1 = 7; 
var myNum2 = 10; 
(myNum1 > myNum2) ? alert("first") : alert("second");  //output: second
      //i.e. if the expression before ? is true, do the stuff between ? and : else do the stuff after :
      //Example:
var num1 = prompt("Please enter your number"); 
var num2 = 10; 
if (num1 > num2) { 
  alert(num1 + " is greater than " + num2); 
} 
else { 
  alert(num1 + " is not greater than " + num2); 
}







