Data Types
        //The term data type refers to the types of values a program can work with. 
        //The sky's the limit with JavaScript variables, 
        //which can hold a bunch of different data types–numbers, strings, arrays, you name it.

        //Numbers can be written with or without decimals. Like this:
var num = 42; // A number without decimals


var price = 55.55;
document.write(price);

        //Changing this variable is a breeze, 
        //just assign to it any other data type value, like num = 'some random string'.
        
        //to declare a variable age and assign it the number 18:
var age = 18;


Strings
        //In JavaScript we can use strings to store and manipulate text.
        //A string can be any text wrapped in quotes. 
        //Single or double quotes, it doesn’t matter, so long as you’re consistent with them. Like this:
var name = 'John';
var text = "My name is John Smith";

        //What if we want to use quotes inside a string though?? 
        //No problem! You can use quotes inside a string, as long as they don't match the quotes enclosing the string itself. 
        //Take a look:
var text = "My name is 'John' ";

        //You can get double quotes inside of double quotes using the escape character like this: \" or \' inside of single quotes.
        
        //To create a string, we need to put the text inside… --> Quotation marks ' '



        //Now is a good time to talk about the backslash (\) escape character. 
        //He comes to the rescue when you need to put quotes within strings (and a bunch of other situations) 
        //by transforming special characters into string characters.

        //Take a look:
var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
document.write(sayHello);

        //But the escape character (\) isn’t just for quotes, 
        //it works when you need to put other special characters inside strings too!

/*
code  output
--------------
\'    single quote		
\"    double quote
\\    backslash
\n    new line
\r    carriage return
\t    tab
\b    backspace
\f    form feed
*/        
        //If you start a string with a single quote, then you need to end it with a single quote too. 
        //This applies to double quotes. Otherwise, JavaScript will get confused. 
        
        
Booleans
        //Booleans in JS serve a useful function by leting you have one of two values, either true or false.

        //So when you need a data type that can only have one of two possible values, 
        //like Yes/No, on/off or true/false, look no further than Mr Boolean. Let’s look at an example:
var isActive = true; 
var isHoliday = false;

        //The Boolean value of 0 (zero), null, undefined, empty string is false.
        //Everything with a "real" value is true.

        
        //Remember these 6 falsy values: 1. False 2. Null 3. Undefined 4. Empty string ("") 5. 0 6. NaN (Not a Number)
   
        

