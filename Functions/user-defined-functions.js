JavaScript Functions
      //Function is a certain block of code that can be reused over and over again
      //A JS function is a block of code designed to perform a particular task.
      //The main advantages of using functions:
      //Code reuse: Define the code once, and use it many times.
      //Use the same code many times with different arguments, to produce different results. 

      //A JavaScript function is executed when "something" invokes, or calls, it.

      // passing the value to the function 
myFunction(2); // if i remove the value will print the alert with 'undefined' value 

      /* define a single function, and pass different parameter values (arguments) to it*/

function sayHello(name) {
    alert("Hi, " + name);
}
sayHello("Sam");
sayHello("Samuel");
sayHello("Samantha");

      /* define a function with two parameters*/
function sayHi(name, age) {
  document.writeln( name + " is " + age + " years old.");
}

      // calling the function and assigning the values 
sayHi("Sam", 35);


      //Function for Fahrenheit to Celsius conversion
<script>
    function toCelsius(fahrenheit) {
			return (5/9) * (fahrenheit - 32);
		}
		document.getElementById('paragraph').innerHTML =
		toCelsius(104); // Change values here to convert them into celsius
</script>

      //Function for Celsius to Fahrenheit conversion
<script>
    function toFahrenheit(celsius) {
			return (celsius*9/5) + 32;
		}
		document.getElementById('paragraph').innerHTML =
		toFahrenheit(40); // Change values here to convert them into fahrenheit
</script>

Defining a Function
      //To define a JavaScript function, use the function keyword, 
                   //followed by a name, followed by a set of parentheses ().

      //The code to be executed by the function is placed inside curly brackets {}.
function name() {
  //code to be executed
}
      //Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

      //Example:
function sayHello(name, time) {
  document.write("hello    " + name + "! " + "<br />" + "You work on JS " + time + " hours.");
}
sayHello(prompt("Whats your name?"), prompt("How many hours do you work on JS?"))



Calling a Function
      //To execute the function, you need to call it.
      //To call a function, start with the name of the function, then follow it with the arguments in parentheses.
      //Example:
function myFunction() {
    alert("Calling a Function!");
}

myFunction();     //Always remember to end the statement with a semicolon after calling the function.

      //to define and call the "hello" function.
function hello() {
   alert("Hi there");
}

hello();


      //Once the function is defined, JavaScript allows you to call it as many times as you want to.
function myFunction() {
    alert("Alert box!");
}

myFunction();
myFunction();  //call it second time

      //You can also call a function using this syntax: myFunction.call(). 
      //The difference is that when calling in this way, you're passing the 'this' keyword to a function. 
      //You'll learn about it later.

      //Example:
var age; /*The age of the user*/
var notOldEnough = true;  /*A boolean variable*/
/* A function which asks the user for his age */
function askForAge(){
    age = prompt("Please enter your age:");
}
/* A function which checks if the age of the user is over 18. 
   If this is not the case it will display an alert and repeat the dialog */
function checkAge(){
    if(age >= 18){
        notOldEnough = false;
    }else{
        while(notOldEnough){
            alert("Not old enough!");
            ageDialog();
        }
    }
}
/* A function which calls the askForAge and the checkAge functions. */
function ageDialog(){
    askForAge();
    checkAge ();
}
/*Start of the dialog*/
ageDialog();


      //Example: Calculator
function insert(num){
				document.form.textview.value = document.form.textview.value+num;
			}
			function equal(){
				var exp = document.form.textview.value;
				if (exp){
					document.form.textview.value = eval(exp);
				}
			}
			function clean(){
				document.form.textview.value = "";
			}
			function back(){
				var exp = document.form.textview.value;
				document.form.textview.value = exp.substring(0,exp.length-1);
			}

