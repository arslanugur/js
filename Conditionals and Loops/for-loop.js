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

/*          i+k  i   Process:
1. i=i+k i= 1+1  2   k = 1 -> is 1 < 10 ? True -> show i = 1 + 1(2) then k++ 
2. i=i+k i= 2+2  4   k = 2 -> is 2 < 10 ? True -> show i = 2 + 2(4) then k++ 
3. i=i+k i= 4+3  7   k = 3 -> is 3 < 10 ? True -> show i = 4 + 3(7) then k++ 
4. i=i+k i= 7+4  11  k = 4 -> is 4 < 10 ? True -> show i = 7 + 4(11) then k++ 
5. i=i+k i=11+5  16  k = 5 -> is 5 < 10 ? True -> show i = 11 + 5(16) then k++ 
6. i=i+k i=16+6  22  k = 6 -> is 6 < 10 ? True -> show i = 16 + 6(22) then k++ 
7. i=i+k i=22+7  29  k = 7 -> is 7 < 10 ? True -> show i = 22 + 7(29) then k++ 
8. i=i+k i=29+8  37  k = 8 -> is 8 < 10 ? True -> show i = 29 + 8(37) then k++
9. i=i+k i=37+9  46  k = 9 -> is 9 < 10 ? True -> show i = 37 + 9(46) then k++ 
10.                  k = 10 -> is 10 < 10 ? False -> Stop the loop
                     Final Value of i is 46.     */
      
      
	//If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

	//Statement 2 is also optional, but only if you put a break inside the loop. 
	//Otherwise, the loop will never end!

	//Statement 3 is used to change the initial variable. 
	//It can do anything, including negative increment (i--), positive increment (i = i + 15).

	//Statement 3 is also optional, but only if you increment your values inside the loop. Like this:      
var i = 0;
for (; i < 10; ) {
    document.write(i);
    i++;
}	//output: 0123456789

	//It is possible to omit all the statements: 
	var i = 0; 
	for (;;) { 
		if (i>= 10) break; 
		document.write(i); 
		i++; 
	} 
	//where the setting of Statement 1 is done before the loop 
	//and condition of statement 2 and increase of statement 3 are inside the loop. 
	//output: 0123456789
	/*
	However, 
	https://stackoverflow.com/questions/37855337/why-break-cannot-be-used-with-ternary-operator
	https://stackoverflow.com/questions/28642693/why-cant-i-use-a-break-statement-inside-a-ternary-conditional-statement-in-c
	*/
	
	//You can have multiple nested for loops.
	
	//to print EVEN values from 0 to 20 using a for loop:
var x = 0;
for (; x <= 20; x +=2) {
   document.write(x); 
}
	//Starting variable (initialization) is 0, 
	//to be incremented or increased by 2 so long as the condition (is less than or equal to 20) 
	//is true which is why your variable increments as follows: 
	//x+=2 (same as x = x + 2) 
	//So for example you start at x = 0 (0 is printed), next x = 0 + 2, x now becomes 2
	
	//What if starting variable was 1, then it would be ODD values...
	
	

	//Example: A For loop Times Table
var x = prompt('value here!');
document.write(x+' TimesTable'+'<br><br>');
for(i=0;i<=12;i++){
    document.write(i+' x '+x+' = '+i*x+'<br>');
}
	/*
	input: 3
        output:
      		0x3=0
		1x3=3
		...
		12x3=36
	*/


	//Example:
var x = 0; 
var number = prompt("INSERT A NUMBER");
for(;x<=10;x++){
   document.write("<table><tr><td>"+x+"x"+number+"="+x*number+"</br>"+"</td></tr></table>");
}
      /*
      input: 3
      output:
      		0x3=0
		1x3=3
		...
		9x3=27
		10x3=30	
	*/
      
      
      
      
	//Example:
loop=0;
for(x=0;x<=5;x++){
   loop++;
   document.write("looop : "+loop+"</br>"+"x = "+x+"</br>"+"</br>");
   }
   if(x=5){
      document.write("<h2 style='color:red;'>(x<=5) *Stop the loop </h2> ");
   }
	/*
	output:
	looop : 1
	x = 0
	...
	looop : 6
	x = 5
		(x<=5) *Stop the loop
	*/

	//Example:
var x = 0; 
var five = 5;
for(;x<=10;x++){
   document.write("<table><tr><td>"+x+"x"+five+"="+x*five+"</br>"+"</td></tr></table>");
}
/*output:
	0x5=0
	1x5=5
	...
	9x5=45
	10x5=50*/



	//Example: Pythagorean Table
var number;
var space = "&nbsp";
var base =10;

for(i=1;i<=base;i++){
  for(w=1;w<=base;w++){
          number = i*w;
          if(number<10){
      document.write(number+space+space);
          }else{
      document.write(number+space);
          }
          if(w==base){
        document.write("<br>");
          }
    }
}	//output:1...10...100
      
	//Example: Boom for Loop
for(let bombTimer=5; bombTimer>0; bombTimer--){
    alert("Still time to escape. Bomb goes off in " + bombTimer)};
// once the for loop boolean statement becomes false, the code moves on to the rest of the program.
alert("BOOM!");
	

	//Example: The Sequence of Fibonacci on JS using a Loop
var x = 1;
var y = 1;
var z = 2;

document.write( x +"<br>"+ y +"<br>"+ z + "<br>");

for (i = 0; i < 100; i++) {
    x = y;
    y = z;
    z = x + y;
    document.write(z +"<br>");
   }
	/*
	output:
	1
	1
	2
	3
	...
	573147844013817200000
	927372692193079200000
	1.5005205362068963e+21
	*/
      

	//Example: Xmas
	//CSS Code:
body {
background-color: black;
    text-align: center;
        color: #ff0000;
        animation: 3s blinker linear infinite;
        -webkit-animation: 3s blinker linear infinite;
        -moz-animation: 3s blinker linear infinite;

         color: green; 
      }

      a {
        color: #ff0000;
        text-decoration: none;
      }

      a:visited {
        color: #ff0000;
      }

      @-moz-keyframes blinker {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @-webkit-keyframes blinker {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        } 
        100% {
          opacity: 1;
        }
      }
 
      @keyframes blinker {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
}

	//JS Code:
var star = "*";
var dot = ".";
var dolar = ";"
var counter = 0;
var span = document.querySelector("span");

function xmas(){
    for(i=0;i<20;i++){

       for(n=1;n<i;n++){
       counter++;
            document.write(star + " ");
            if(n%2!=0){
               document.write("<span style='color:red;'>" + dot + "</span>" + " ");
            } else {
                document.write("<span style='color:yellow;'>" + dolar + "</span>" + " ");
            }
             }
        document.write("<br/>");
    }
    
       for(m=1;m<4;m++){
        
        
       for(w=1;w<5;w++){
            document.write("<span style='color:brown; font-weight: bold; padding: 0 px;'>#</span>");
            }
             document.write("<br/>");
             
    }
    document.write("<span id='text'; style='color:orange;'>" + "<h1>Merry Xmas</h1>" + "</span>" + " ");
    //document.write(counter);
}
document.write("<span  style='color:#d834af; font-size: 40px;'>" + star + "</span>" + " ");

xmas();


