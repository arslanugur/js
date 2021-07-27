Creating Arrays
      //You can also declare an array, tell it the number of elements it will store, and add the elements later.

var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

document.write(courses[2]); //JS

      //An array is a special type of object.
      //An array uses numbers to access its elements, and an object uses names to access its members. 

      //https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
      //https://stackoverflow.com/questions/18947892/creating-range-in-javascript-strange-syntax

      //to add an element in the beginning of the array use unshift() method. 
      //to add an element at the end of the array use push() method.

      //to output the third member of the array:
document.write(example[2]);


      //JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. 
      //You can then add the elements dynamically.
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";

document.write(courses[2]);

      //You can add as many elements as you need to.



Array Literal
      //For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax.
var courses = ["HTML", "CSS", "JS"]; 

document.write(courses[2]);

      //This results in the same array as the one created with the new Array() syntax.

      //You can access and modify the elements of the array using the index number, as you did before.
      //The array literal syntax is the recommended way to declare arrays.

      //var arr = new Array(...); //not the right way 
      //var arr = [...]; //right way BUT, it is fine they showed both ways. 

      //Example:
var learning = new Array();
soloLearning[0] = "Keep\n\b";
soloLearning[1] = "\n\on\n";
soloLearning[2] = "\n\bLearning\n\b";
soloLearning[3] = "Alright";

document.write(learning[0]);
document.write(learning[1]);
document.write(learning[2]);
document.write(learning[3]);

      //By entering var example = new Array(); we create an empty array which can be filled anytime later





