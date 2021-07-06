Object Initialization
      //Use the object literal or initializer syntax to create single objects.
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

      //Objects consist of properties, which are used to describe an object. 
      //Values of object properties can either contain primitive data types or other objects.

      //Example:
var bird = { name: "Owl", beak: "Sharp" }; 

      //There is another way to create an object, which create an object first then add the properties later:
var John = new Object(); 
John.name = "John"; 
John.age = 25;

      //Another way: to create an empty object 
var Person = {}; 
// add properties 
Person.Name = "John"; 
Person.Age = 42;

      //C# vs JS
//C# 
var person = new {Name="man1",Age=20}; 
//JS 
var person ={Name:"man1", Age=20};


      //Example:
simba = {category: "lion", gender: "male"};



Using Object Initializers
      //Spaces and line breaks are not important. An object definition can span multiple lines.
var John = {
  name: "John",
  age: 25
};
var James = {
  name: "James",
  age: 21
};
      //No matter how the object is created, the syntax for accessing the properties and methods does not change.
document.write(John.age);

      //Don't forget about the second accessing syntax: John['age'].

      //Example: to combine prompts with object initialisers: 
var FirstPerson = { 
  name: prompt("First person, what is your name?"), 
  age: prompt("And, how old are you?") }; 

var SecondPerson = { 
  name: prompt("Second person, what is your name?"), 
  age: prompt("And, how old are you?") }; 

document.write(FirstPerson.age);

      // to display the "simba" object's "category" property on the screen:
document.write(simba.category);







