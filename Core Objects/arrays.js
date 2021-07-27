Arrays
      //Arrays store multiple values in a single variable.

      //To store three course names, you need three variables.

      //Example:
var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 

      //But what if you had 500 courses? The solution is an array
var courses = new Array("HTML", "CSS", "JS"); 

      //This syntax declares an array named courses, which stores three values, or elements.

      //You can create a array like this var myArray = []


      //Example: 
var course = ["c","c++","c#","java"];
//GIVEN BELOW IS SECOND METHOD TO CREATE ARRAY
car = new Array("BMW","VOLVO","SKODA"); //note first letter of the array shoudl be capital
//I RECOMMED YOU TO USE FIRST METHOD IT IS EASY AND SIMPLE

/*NOW THE QUESTION IS HOW TO ACCEES ARRAY 
JUST USE INDEX TO ACCES THE ELEMENT OF ARRAY*/

document.write(car[0]+"<br>"); //note index start from 0 not 1
document.write(course[2]); 

//pushing in array(add element in array)

course.push("new element");
document.write("<br>" + course.toString());//here new element is added by push and array become string by toString(); method

document.write("<br>" + course.join(" / "));//join something by passing argument in .join method(here i add "/" see output)

course.pop(); //remove element from array in the last by using pop method
document.write("<br>" + course); //see output "new element" has been removed from array
/* like push and pop work for add and remove element in the array
    shift and unshift also work like that 
    the only difference is push and pop work in the last of the array while shift and unshift work start in the array follow example below

*/
course.shift();
document.write("<br>" + course);// c has been removed from array as it is first element

course.unshift("html");
document.write("<br>" + course);// html has been added in the beginning in the array(see output)

//you can change element by index
course[2]="css";
document.write("<br>" + course);//css has been placed instead of c#(see output)

delete course[2];
document.write("<br>" + course);// css has been delete (see output)

/*OUTPUT: 
BMW
c#
c,c++,c#,java,new element
c / c++ / c# / java / new element
c,c++,c#,java
c++,c#,java
html,c++,c#,java
html,c++,css,java
html,c++,,java 
*/

      //What two keywords do we need to create an array? - Array, new
      //It isnt necessary to use "array" or "new" you can do let arr= [];


Accessing an Array
      //You refer to an array element by referring to the index number written in square brackets.
      //This statement accesses the value of the first element in courses and changes the value of the second element. 

var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

      //[0] is the first element in an array. [1] is the second. Array indexes start with 0. Arrays are ALWAYS zero-based index

      /*
      There are two variables in given example above. 
      One is in form of an Array and that is courses. 
      2nd variable is course that stores the 1st index numbered (0)value(html) of Array'courses'. 
      3rd line of js statement changes 2nd index numbered(1) value (css) to c++. 
      Index numbers of an Array are counted from '0'. 
      So, here 1st and 2nd index numbered value/element are html and css consequtively. 
      index numbers are written in square brackets [ ]. 
      var courses = new Array("HTML", "CSS", "JS"); 
      var course = courses[0]; // HTML courses[1] = "C++"; //Changes the second element
      */
      
      //Example:
var subjects =new Array("Hindi", "English", "Mathematics"); 
var subject1 = subjects[0]; 
var subject2 = subjects[1]; 
var subject3 = subjects[2]; 

document.write(subject1); 
document.write(subject2); 
document.write(subject3); //Hindi English Mathematics


      //Example:
var arr = new Array(3, 6, 8);

document.write(arr[1]); //6

      //Attempting to access an index outside of the array, returns the value undefined
var courses = new Array("HTML", "CSS", "JS"); 
document.write(courses[10]); //undefined

      //Our courses array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).


      //Example:
var colors = new Array("Blue", "Green", "Red");
var colors = colors[0];
document.write(colors);

document.write("<br>");

var names = new Array("Bob", "James", "John");
var names = names[10];
document.write(names);
/*
Blue
undefined
*/


