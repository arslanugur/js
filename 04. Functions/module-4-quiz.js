//Quest 1:
      //Example:
function test(number)
{
   while(number < 5) {
      number++;
   }
   return number;
}
alert(test(2));

/*
The function takes 2 as the initial parameter
1. number = 2 2<5 true number++=3 return (then number) --> 3
2. number = 3 3<5 true number++=4 return (then number) --> 4 
3. number = 4 4<5 true number++=5 return (then number) --> 5 
4. number = 5 5<5 false Stop LOOP output return --> 5
*/


      //Example:
function multNmbrs(a, b) {
    var c = a*b;
}
multNmbrs(2, 6);  
//output: nothing because no function (like document.write(), alert() etc) to output this to the screen.
//you tell the computer to multiply it, but you don't tell it to display it or write it on the screen, (or console.log)

//"document.write(multNmbrs(2, 6));" after the function, instead of "multNmbrs(2, 6);" it will output "undefined". 
//And if you also add "return c;" within the function (in last row) it will output the result of the multiplication of a and b.
function test(a,b) { 
  var c= a+b; 
  document.write(c); } 

test (3,5);
//OR
function test(a,b) { 
   var c= a+b; 
   return c; }

document.write(test(3,5));

//prompt is for getting input from the user;
//alert is for displaying a message in a box;
//confirm is also used to have user input, but that input is for only verify about true or false. 

//Quest 2:
      //to calculate the maximum of the parameters:
function max(a, b) { 
  if(a >= b) 
    return a; 
  else 
    return b; 
} 
document.write(max(12, 10)) //output: 12

      //Example:
function max(a, b) { 
  return (a >= b) ? a : b; } 
  var x = max(5, 6); 

document.write(x); //do the same with the ternary op.

      //Example:
//The function of finding the maximum or equal numbers:
function max(a,b){
    if (a > b)
        return 'a > b';
    else
        return 'a <= b';
}

alert(max(5,5));  //output: a <= b


//Quest 3:
      //What is the correct syntax for referring to an external script called "script.js"?
<script src="script.js">
      //href is HypertextReference for CSS, src is Source for JS
  
  
//Quest 4:  
      //Example:
What alert will display on the screen?

function test(a, b) {
  if(a > b) {
    return a*b; 
} else {
     return b / a; 
    }
}

alert(test(5, 15));    //output returns: 3




