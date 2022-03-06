INDEX
- length property
- concat


The length Property
      //JavaScript arrays have useful built-in properties and methods.
      //An array's length property returns the number of its elements.
      //Array has the "length" property, because it is an object
var courses = ["HTML", "CSS", "JS"];
document.write(courses.length); //3

      //If you want to print the whole array: 
var courses = ["HTML", "CSS", "JS"]; 
var x = courses.length; 
for (var i=0; i"); };
     
     //Example:
var courses = ["HTML", "CSS", "JS"]; 
document.write(courses.length); 
document.write(courses[0].length); 
document.write(courses[1].length); 
document.write(courses[2].length);

      //Example:
var ar6=new Array(5);
ar6[1]="gngn";
ar6[2]="b{}nbn";
ar6[9]="znzn";
document.write(" size of Array = "+ar6.length);

      //Example:
var countries = ["USA", "Russia", "China", "India", "UK"];
document.write(countries.length);
     //Length command in JS outputs amount of objects in an array in this case, the output is 5 
     //because there are 5 objects in the array called countries, and length outputs the individual number.

     
Combining Arrays - Concatenate
            //JavaScript's concat() method allows you to join arrays and create an entirely new array.
            //Example:
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

document.write(courses[2]); //output: JS

     //The courses array that results contains 4 elements (HTML, CSS, JS, C++). 
     //The concat operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.
     
var c1 = ["HTML", "CSS"]; 
var c2 = ["JS", "C++"]; 
var c3 = ["android","java"]; 
var courses = c1.concat(c2).concat(c3); 
document.write(courses[4]); //output: android
     
      //The "concat" method takes two arrays and combines them in one new array
     
      //Example:
var colors = ["Blue", "Red", "Green"];
var numbers = [1, 2, 3, 4, 5];
var colorsandnumbers = colors.concat(numbers);

document.write(colorsandnumbers);
     
     //Concat joins two or more different arrays in JS into one array and displays them together, 
     //like in this case array called colors and array called numbers got displayed under single array called colorsandnumbers.
     //output: Blue,Red,Green,1,2,3,4,5 
     
     
     
