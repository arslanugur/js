JavaScript Objects
      //Now the game begins. This is where JS begins.
      //JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.
      //Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.
      //Objects are variables, but can contain many values.
      //Example:
var person = {
 name: "John", age: 31, 
 favColor: "green", height: 183
};

      //These values are called properties.
/*
Property      Property Value
----------------------------
name          John
age           29
favColor      Blue
height        182
*/

      //JavaScript objects are containers for named values.

      //In reference to an object, color, height, weight and name are all examples of: Properties

Object Properties
      //You can access object properties in two ways.
objectName.propertyName
//or
objectName['propertyName']

      //This example demonstrates how to access the age of our person object. 
var person = {
    name: "Ozzy", age: 27, 
    favColor: "BritishBlue", height: 183
};
var x = person.age;
var y = person['age'];

document.write(x);
document.write(y);

      //JavaScript's built-in length property is used to count the number of characters in a property or string.
var course = {name: "JS", lessons: 41};
document.write(course.name.length); //output: 2
      /*
      it counts the number of character in the property name. 
      therefore, from the above example it will display 2 since the property name contains 2 characters 'J' and 'S'. 
      And it's used for string. if you used for numbers it displays undefined.
      
      a blank space is a character too!
      */

      //Objects are one of the core concepts in JavaScript.

      //Example:
function start(){ // start is the name of function to be called later in html file.
    var person={ // Opening Object Scope.

        //reading first name, the prompt function is requsting string.
        fname: prompt("Your first name:"),    
        //same goes with last name.
        lname: prompt("Your last name:")
    } //closing the object scope.
    //show message of first name and last name.
    alert(person.fname + " " + person.lname);
    //show message of how many charactors are in you name.
    alert("Your name has " + (person.fname.length + person.lname.length)  + " characters");
}

      //What built-in property is used to count the number of characters in an object's property: length


Object Methods
      //An object method is a property that contains a function definition.
      //Use the following syntax to access an object method.
objectName.methodName()
      //**As you already know, document.write() outputs data. The write() function is actually a method of the document object. 
document.write("This is some text");

      //Methods are functions that are stored as object properties.
      
      /*An object can have both properties and methods. 
        To understand the difference, let us take a real life example of an object, say, a cat. 
        The properties of object cat can include that he has legs = 4, pattern = "striped", sex = "male", ears = 2, etc. 
        The methods of an object cat can include things he can do, such as to meow(), drink(), eat(), sleep() etc. 
        So for practical purposes, methods are actions of an object, while properties are innate features of it.*/
      
 var car = { 
      car1: "BMW", 
      car2: "Benz", 
      car3: "Lambo", 
      
      getNamesOfCars : 
      function () { 
      document.write(car.car1 + " " + car.car2 + " " + car.car3); } }; 
      /*
      explaining of the example : 
      we defined an object named car . car objetct has 4 properies , the last property is a method, 
      we can use and call this method with this code : car.getNamesOfCars(); 
      we can see that car is an object that has some properties like car1 , car2 , car3 and getNamesOfCars method, 
      and we can return the value of the properties by the method. */

      //Access the "color" property of the "hair" object using dot syntax.
hair.color  //hair is the Object and then color as a property and it's not a method

      //Difference between method and property
objectName.propertyName 
objectName.methodName()





