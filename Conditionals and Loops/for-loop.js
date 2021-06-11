The For Loop
      //Loops can execute a block of code a number of times. 
      //They’re handy when you want to run the same code repeatedly, adding a different value each time.
      
      //JavaScript has three types of loops: for, while, and do while.

      //We’ll start here with the classic for loop.

      //Here's the syntax:
for (statement 1; statement 2; statement 3) {
   code block to be executed
}

      /*
      The classic for loop has three components, or statements.
      And here’s what happens when it runs:
      Statement 1 is executed before the loop (the code block) starts.
      Statement 2 defines the condition for running the loop (the code block).
      Statement 3 is executed each time after the loop (the code block) has been executed. 
      */
            
      /*      
      Declaration of counting variable, condition evaluation, stepping/counting and action statements 
      are the 4 'components' I proposed that a for loop consists of
      
      The block is a derivative of the three components hence it's not four components. 
      The three components are: 
      1) Initialization: To set the initial value, in this case it's set to 1. 
      2) Condition: That must be met, in this case it's less than or equal to 5. 
      3) Iteration: Used to repeatedly run the code in this case it increments the value by 1 everytime 
         it's been run until it reaches the condition that was previously set. 
      
      ex:for (Initialization;condition;iteration) 
      ex:for (×=1;×<=12;×++){}
      
      NOTE: The case I referred to are displayed in the next page.
      */
      
      
      //This example creates a for loop that prints numbers 1 through 5:.
      
for (i=1; i<=5 i++) {
	document.write(i + "<br />");
}

/*1
  2
  3
  4
  5*/
  
      /*
      So what's actually happening?

      In this example, Statement 1 sets a variable before the loop starts (var i = 1).
      Statement 2 defines the condition for the loop to run (it must be less than or equal to 5).
      Statement 3 increases a value (i++) each time the code block in the loop has been executed. 
      */
      
      
      //Statement 1 is optional, and can be left out, if your values are set before the loop starts.
var i = 1;
for (; i<=5 i++) {
    document.write(i + "<br />");
}
/*1
  2
  3
  4
  5*/
  
      //You can also initiate more than one value in statement 1, using commas to separate them.
for (i=1, text=""; i<=5 i++) {
    text = 1;
    document.write(i + "<br />");
}
/*1
  2
  3
  4
  5*/
      //ES6 introduces other for loop types; you can learn about them in the ES6 course later.
      
      //code1 var x=1; for(x; x<10;x++){} x+=x+100; document.write(x) 
                    //output:120 [[[....nothing in the curly braces]]] 
      //code2 var x=1; for(x; x<10;x++){ x+=x+100;} document.write(x) 
                    //output:103 [[[..."document.write " outside the curly braces]]] 
      //code3 var x=1; for(x; x<10;x++){ x+=x+100; document.write(x);} 
                    //output:102 [[["document.write" inside the curly braces!]]] 
      
      /*
      i = 1 is the start condition, 
      which means the loop will start counting at 1 i <= 5 is the stop condition, 
      which means the loop will run as long as i is less than or equal to 5 
      and will stop if i is greater than 5 i++ is the iterator, 
      which means that each loop will have 1 added to it (i++ : i = i + 1)
      */
      
      /*
      Code 1: (for loop not obeyed) x takes in the value of the last iteration 
              and add 1 to it => 9 + 1 = 10. x+=x+100 => x = 2x + 100 => 2(10) + 100 = 120 [ans]. 
      Code 2: (for loop still not obeyed) x takes in the value of the first iteration => 1, 
              before incrementing the result. x+=x+100 => x = 2x + 100 => 2(1) + 100 = 102 
              and increments it by 1 => 103 [ans]. 
      Code 3: (for loop obeyed) x takes in the iteration value => 1. x+=x+100 => x = 2x + 100 => 2(1) + 100 = 102 [ans]. 
      */
      
      //Example: to compose a valid for loop:
var i = 1;
 for(k=1; k<10; k++) { 
   i += k;      //{i = i + k;}
}
     /* 
                 i+k  i   Process:
     1. i=i+k i= 1+1  2   k = 1 -> is 1 < 10 ? True -> Display i = 1 + 1(2) then k++ 
     2. i=i+k i= 2+2  4   k = 2 -> is 2 < 10 ? True -> Display i = 2 + 2(4) then k++ 
     3. i=i+k i= 4+3  7   k = 3 -> is 3 < 10 ? True -> Display i = 4 + 3(7) then k++ 
     4. i=i+k i= 7+4  11  k = 4 -> is 4 < 10 ? True -> Display i = 7 + 4(11) then k++ 
     5. i=i+k i=11+5  16  k = 5 -> is 5 < 10 ? True -> Display i = 11 + 5(16) then k++ 
     6. i=i+k i=16+6  22  k = 6 -> is 6 < 10 ? True -> Display i = 16 + 6(22) then k++ 
     7. i=i+k i=22+7  29  k = 7 -> is 7 < 10 ? True -> Display i = 22 + 7(29) then k++ 
     8. i=i+k i=29+8  37  k = 8 -> is 8 < 10 ? True -> Display i = 29 + 8(37) then k++
     9. i=i+k i=37+9  46  k = 9 -> is 9 < 10 ? True -> Display i = 37 + 9(46) then k++ 
     10.                  k = 10 -> is 10 < 10 ? False -> Stop the loop
                          Final Value of i is 46.
     */
      
      
      
      
      
      
      
      
      
