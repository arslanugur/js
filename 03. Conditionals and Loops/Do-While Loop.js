The Do...While Loop
      //it's a variant of the while loop but with one important difference.

      //This loop will execute the code block once, before checking if the condition is true, 
      //and then it will repeat the loop as long as the condition is true.

      //Here’s the Syntax:
do {
   code block
}
while (condition);

      //Note the semicolon used at the end of the do...while loop. This is important.

      //Example:
var i=20;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25); 
/*output: 20
          21
          ..
          25 */
      
      //The loop will always be executed at least once, even if the condition is false, 
      //because the code block is executed before the condition is tested.


      //Use for loop if: you know when the loop should stop 
      //Use while if: you want loop to run for unknown time 
      //Use do while if: same as while except at least run once. 
      //Example: person walks into store to buy something, 
               //you want to calculate the price of what they bought. 
      //You could use a do while, because you know they at least bought 1 item.

      //Example:
var count=1;
do {
  document.write("hello <br />");
  count++;
}
while (count<=10); //output: hello x 10


      //Example:
do{ 
  runGame(); } 
while (gameOver == false); //output game over / restart 

      //Example:
do { 
  document.write("Test") } 
while (0 != 0) 
      // Outputs "Test" even if it's false because it executes at least once.


      //Loops Examples:  
for (i=0; i<=10; i++) { 
  document.write(i + " "); } 

var i=0; 
while (i<=10) { 
  document.write(i + " "); i++; } 

var i=0; 
do { 
  document.write(i + " "); i++; } 
while (i<=10);    //outputs: 0 1 2 ... 9 10



// for loop
document.write("for  &ensp; &ensp;&ensp;  &ensp;&ensp;");
for (i=1, text=""; i<=7; i++) {
    text = i;
    document.write(i+"_");
}

document.write("<br /><br />")//line break

// for loop with if
document.write("for if &ensp;&ensp; &ensp;&ensp;");

for (i=1, text=""; i<=10; i++) {
    if (i == 8) {
    document.write("<br /><br />");
        break; 
    }
    document.write(i + "-");
}

//while loop
document.write(" while &ensp;&ensp;&ensp;&ensp;");
var i=4;
while (i<=10) {
    document.write(i + "*");
    i++;
}

document.write("<br /><br />")//line break

//do while loop
document.write(" do while &ensp;")
var i=4;
do {  
    document.write(i + "❄️");
    i++;  
}

while (i<=10);

      //(;) is important after statements, so inside the code block, each statement should end with (;). 
      //Moreover, usually loops are not statements and thus they don't need a (;), 
      //but in the case of do..while, (while) here in that case is considered to be a statement, 
      //and thus it needs a (;) after it. 
      //To summarize: ALL statements need (;) after them, ALL loops don't need (;) after them, 
      //EXCEPT if the loop where used as statement and had no body (code block).

      //Example:
var i=1;
do{
    alert ("i love sololearn");
    i+=1
}
while (i<=10)
  
  
      //Example:
// This loop will be executed once
var i=26;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25);    //output: 26

