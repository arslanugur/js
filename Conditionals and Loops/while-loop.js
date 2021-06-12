The While Loop
      //Time to move on to the second of our three loop statements, while.

      //The while loop repeats through a block of code, but only as long as a specified condition is true.

      //Here's the syntax:
while (condition) {    
   code block
}
      //The condition can be any conditional statement that returns true or false.

      //the difference between for loop and while loop is that for loop has index value but while dont. 
      //In while loop, you have to declare the var for initial value like 
      var i=0 while (i <=10){ 
            document.write (i); i++; } 
      //in for loop u dont need to declare a variable for initial value like 
      for(i=0;i <=10;i++){ 
            document.write(i)}

      //The result of the condition statement is always: 
      //A Boolean value (true or false)

      //Example: The times table from 0 to 12 using while loop
      //to generate times table of a number inputted
var num = prompt ("Enter a number");
document.write("Multiplication of " + num + " from 0 times 12: <br>");

var i = 0;
while(i<=12){
   document.write(i+" x "+num+" = "+ i*num + "<br>");
   i++
}

      /*
      input: 1
      output: Multiplication of 1 from 0 times 12:
      0 x 1 = 0
      1 x 1 = 1
      2 x 1 = 2
      ...
      12 x 1 = 12
      */



      // Find total days in a month 
      // example the while loop console.log('Know total days in a month')
var lastday = function(y,m){ return new Date(y, m, 0).getDate(); } 
var now = new Date(); 
var year= now.getFullYear(); 
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
var x = 1; 
      console.log('Year :'+year); 
while( x < 13 ) { 
      console.log(months[x-1]+' totaldays is '+lastday(year,x)); x++; }
      /*output:
      Year :2021 
      Jan totaldays is 31 
      Feb totaldays is 28 
      Mar totaldays is 31 
      ...
      */

      //Example: while loop that converts a number from decimal to binary
var num = 42;
var bin = '';
while (num > 0)
{
	bin = num%2 + bin;
	num = Math.trunc(num/2);
}
document.write(bin); //output: 101010


      //Ok, we've got the theory, let's look at a real example:
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}
      /*
      0
      1
      ...
      9
      10
      */

      //The loop in this code will continue to run as long as i is less than, or equal to, 10. 
      //And each time the loop runs, it will increase by 1.

      //This will output the values from 0 to 10.

      //Be careful when writing conditions. If a condition is always true, the loop will run forever!


      //Example:
let a =0;
while(a<=8){
    console.log("square".repeat(a));
    a +=1
}

      //Example:
var num = prompt("Enter number")
document.write(num + "xtimetable" + "<br>");
var v = 0;
while(v<=1988){
    document.write(num + "x" + v + "=" + num*v + "<br>")
    v++;
}
/*
input: 2  - 
output: 2 x timetable
        2x0=0
        2x1=2
        2x2=4
        ...
        2x1986=3972
        2x1987=3974
        2x1988=3976
*/

      //to print x's values from 1 to 5.
var x = 1;
while(x <= 5) {
    document.write(x + "<br />");
    x = x + 1;
}

      //Endless loops are not good. 
      //And one way of this happening is if we forget to increase the variable used in the condition. 

      //Make sure that the condition in a while loop eventually becomes false.
      //While loop get you so many times with infinite loop. Therefore, use technique until sure while loop is working
var limitIndex = 0; 
var limit = 10; 
while( condition ) { 
	if(limit < limitIndex) { 
		break; } limitIndex++; }

      //Basically it allows a loop to run at maximum 10 times. 
      //The loop will run as long as limit < limitIndex. 
      //Every cycle, this happens: 
      //limit remains constant and limitIndex += 1 limit = 10 and limitIndex = 0 limit = 10 
      							      and limitIndex = 1 limit = 10 
							      and limitIndex = 2 limit = 10 
							      and limitIndex = 3 limit = 10 
							      and limitIndex = 4 limit = 10 
							      and limitIndex = 5 limit = 10 
							      and limitIndex = 6 limit = 10 
							      and limitIndex = 7 limit = 10 
							      and limitIndex = 8 limit = 10 
							      and limitIndex = 9 limit = 10 
							      and limitIndex = 10 limit = 10 
							      and limitIndex = 11 
							      Now the loop breaks because limit < limitIndex :) 


	//Example:	
var x=1; 
while (true) { 
	document.write(x +''); 
	x++; if (x>5) { 
	break; } }  //output: 1 2 3 4 5
	

	//Example: Password Attempt
var i;
var j=3;
while (i!=="password" && j>=0) {
var i=prompt("Enter 'password'. Hint: password is literally 'password'... I know right?..");
if (i=="password") {
document.write("Account Unlocked");
} else if (j>0) {
alert("Wrong, Try Again."+" "+j+" Attempt Remaining");

} else {
 document.write("Account Locked"+"<br>"+"<br>"+"Thanks...");
}
j--;
}  //you can use a boolean "true" than "i". --Rearrangeable
	

	//Infinite times will the while loop run, if we remove the counting variable increment statement.
	//However, an increment or decrement is not required. 
	//The loop continues as long as the conditional evaluates to true. 
	//Example: Infinity Loop!!
while(1){ 
Document.write(" hey ") ; }
	
	//Example: Infinity Loop!!
var i = 0 
while("i") { 
	document.write(i); }

	//Example: Infinity Loop!!
 var x = 1; 
 while(x){ 
 	document.write(x); x++; }




