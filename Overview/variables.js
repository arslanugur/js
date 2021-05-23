Variables
      Variables are containers for storing data values. The value of a variable can change throughout the program.
      How do we tell JavaScript that we're working with a variable? --> var

      Declaring a variable is as simple as using the keyword var. Which would look like this:
var x = 10;

      In this example we’ve assigned a value of 10 to the variable x.

      We’ve used the word assigned deliberately here, 
      because in JavaScript, the equal sign (=) is actually called the "assignment" operator, rather than an "equal to" operator.

      Which means that in JavaScript, x = y will assign the value of y to x variable.

      JavaScript is sensitive, case sensitive that is. So variables like lastName and lastname are not the same.


Using Variables
      Ok, let’s put some of what we’ve learned together!
      
      How about we assign a value to a variable and output it to the browser. We’ve got this!
var x = 100;
document.write(x);

      But what’s the point of variables anyway? 
      Well, imagine your program has 1000 lines of code that include the variable x. 
      With variables you can change the value of the variables and use them multiple times in your code:

      Like this:
var x = 100;
console.log(x);    //output: 100

x = 42;
console.log(x);    //output: 42

      Every written "instruction" is called a statement. JavaScript statements are separated by semicolons.


      to declare a variable and assign the value of 32.
var my_variable = 32;

      
Naming Variables
      Let’s talk about names.
      It’s super important to remember that JavaScript variable names are case-sensitive.

      What do you think the output of the following code would be?
var x = 100;
document.write(X);   //output: not defined
      
      An error. That’s because x and X are different, and we didn't declare the X variable.

      Brace yourself for more rules!
      - The first character of a variable name must be a letter, 
        underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).
      - The first character of a variable name can’t be a number.
      - Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that;
      - Variable names can’t contain spaces.
      - You’re not allowed to use any special symbols, like my#num, num%, etc.

      JavaScript is a hyphen free zone. They’re reserved for subtractions.      
      
      
      
      
