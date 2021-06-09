The else if Statement
      //The else if statement lets us specify a new condition if the first condition is false. Like this:
var course = 1;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

      /*This is what's happening in the code above:
      - if course is equal to 1, output "HTML Tutorial";
      - else, if course is equal to 2, output "CSS Tutorial";
      - if none of the above condition is true, then output "JavaScript Tutorial";

      course is equal to 1, so we get the following result: HTML Tutorial*/

      //The final else statement "ends" the else if statement and should be always written after the if and else if statements.

      //Example:
var time = prompt ('What is the time? (just hour)');
if (time <= 11) { 
  alert("Good morning!");
} 
else if (time >=12 && time <=19) { 
  alert("Good day!"); 
} 
else if (time ==20 ) { 
  alert("Good evening!");
} 
else { 
  alert("Good night!"); 
}


      //Example:
var num1 = parseInt(prompt ("please insert the first number")); 
var num2 = parseInt (prompt("please insert the last number")); 
x = num1; 
y = num2; 
if (num1 == 42) { 
  alert("42 is already the answer to everything") } 
else if (num2 == 42) { 
  alert("42 is already the answer to everything") } 
else if (num1 > num2) { 
  alert(x + " greater than " + y) 
} 
else if(num1 == num2) { 
  alert(x + " is equal to " + y) 
} 
else { alert(x + " is smaller than " + y); }


      //You can write as many else if statements as you need.
let userInput = prompt("Choose Paper, Rock, or Scissors"); 
let computerInput = Math.random(); 
console.log(computerInput) 
if (computerInput <= .33){ computerInput = "Paper" } 
else if (computerInput >= .66) { computerInput = "Rock" } 
else (computerInput = "Scissors"); 
  console.log(computerInput) 
if (userInput == computerInput) { 
  console.log ("It was a draw!") } 
else if (userInput == "Rock" && computerInput == "Paper") { 
  console.log ("You lose! Sorry!!") } 
else if (userInput == "Paper" && computerInput == "Scissors") { 
  console.log ("You lose! Sorry!!") } 
else if (userInput == "Scissors" && computerInput == "Rock") { 
  console.log ("You lose! Sorry!!") } 
else { 
  console.log ("You win! Fantastic!!") };


      //What keyword is used to end the "else if" statement? -- else

      //The final else block will be executed when none of the conditions is true.
      //To change the value of the course variable in our previous example. 
var course = 3;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}  //output: JavaScript Tutorial


      //Example:
if( num == 0 ) { 
  document.write("Square root of 0 = 0.") } 
else if( num == 1 ) {
  document.write("Square root of 1 = 1.") } 
else if( num == 2 ) { 
    document.write("Square root of 2 = 4.") }..
      
      //Rational Way
var num= prompt("Enter Number to Calculate Square ") 
function square(var x){ 
  console.log(x*x) } 
square(num)


      //Example:
var status = 1;
var msg;
if(status == 1) {
   msg = "Online";
}
else if(status == 2) {
   msg = "Away";
} 
else {
   msg = "Offline";
}





