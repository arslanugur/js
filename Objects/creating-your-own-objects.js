The Object Constructor
      //In the previous lesson, we created an object using the object literal (or initializer) syntax.
var person = {
name: "John", age: 42, favColor: "green"
};
      //This allows you to create only a single object.
      //Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type.
      //The standard way to create an "object type" is to use an object constructor function. 
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

      /*The above function (person) is an object constructor, 
        which takes parameters and assigns them to the object properties.*/

      //The this keyword refers to the current object.
      //Note that this is not a variable. It is a keyword, and its value cannot be changed.

      //Example: To create  a constructor function:
function movie(tempTitle, tempDirector) { 
  this.title = tempTitle; 
  this.director = tempDirector; 
}


      //Example:
function Person(first, last, age, eye) { 
  this.firstName = first; 
  this.lastName = last; 
  this.age = age; 
  this.eyeColor = eye; 
} 
var myFather = new Person("John", "Doe", 50, "blue"); 
var myMother = new Person("Sally", "Rally", 48, "green");


      //Example:
function animal(name, skin, habitat) {
    this.name = name;
    this.skin = skin;
    this.habitat = habitat;
}
var a1 = new animal("fish","scales","water");
var a2 = new animal("eagle","plumage","air");
var a3 = new animal();
a3.name = "panther";
a3.skin = "hair";
a3.habitat = "earth";

document.write(a1.name + " ");
document.write(a1.name.length + " letters<br/>");
document.write(a2['skin'] + " ");
document.write(a2.skin.length + " letters<br/>");
document.write(a3.habitat + " ");
document.write(a3['habitat'].length + " letters");



Creating Objects
      /*Once you have an object constructor, 
        you can use the new keyword to create new objects of the same type.*/

      //Code:
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); //42
document.write(p2.name); //Amy

      //p1 and p2 are now objects of the person type. 
      //Their properties are assigned to the corresponding values.

      //Example:
function data(name,age,location){ 
  this.yourName = name; 
  this.yourAge = age; 
  this.yourLocation = location; 
} 
var student1 = new data("Adam",17,"London"); 
var student2 = new data("Charles",20,"Paris"); 

alert("The name of student1 is: " + student1.yourName); 
alert("The location of student 2 is: " + student2.yourLocation);

      //Example:
var colors = {
    name1: "red",
    name2: "green",
    name3: "blue",
    favColor: 1
};

var a = colors.name1;
var b = colors['name2'];

document.write(a, '<br /> <b>');
document.write(b, '<hr> </b>');


document.write('This code uses built-in length property to determine(count) the size of the string (characters): <br /> <b>');

var course = {
    name: 'JS', 
    lessons: 41};
    
document.write(course.name.length, "</b> <br /> <hr>");


function students (student_Names, identity, matric_Number, school, department)
    {
        this.name = student_Names;
        this.id = identity;
        this.mat_no = matric_Number;
        this.sch = school;
        this.dept = department;
    }

var student1 = new students ("Immanuel Kant", 1333, "no133370021", "Science & Technology", "Computer Science");

document.write("<b>", student1.name + "</b>", " is from the School of <b>", student1.sch + "</b>", " with a matric number of " + "<b>", student1.mat_no + "</b>", " in the department of <b>", student1.dept);




      //Example:
function car(color,size, name) {
    this.color=color;
    this.size=size;
    this.ownerName=name;
}

var c1 = new car("Green", "Medium","Bob");
var c2 = new car("Red", "Big","Tom");

document.write("The first car is " + c1.color + ".<br/>");
document.write(c2.ownerName + " owns the second car.");


      //Example:
function person(name, age, color) { 
  this.name = name; 
  this.age = age; this.favColor = color; } 

var p1 = new person("John", 42, "green"); 
var p2 = new person("Amy", 21, "red"); 

document.write(p1.age + " "); document.write(p2.name); /* Outputs 42 Amy */

      //keyword "new" is used for creating an instance of an object
      //New is memory allocator,so it act as instance
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

      //Example:
function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

document.write(John.age);

      //Access the object's properties by using the dot syntax, as you did before. 

/*
Object's Name  |   Property's Name
-----------------------------------
        John   |   name
        John   |   age
        James  |   name
        James  |   age
*/

      //Understanding the creation of objects is essential.

      //Example:
function person (n, a) { 
  this.name = n; 
  this.age = a; } //n and a are dummy parameters. They can be anything.

var John = new person("John", 25); 
var James = new person("James", 21);  


      //Example:
function person (name, age) { 
    this.name = name; 
    this.age = age; } 
    
var John = new person("John", 25); 
var James = new person("James", 21); 
var x= new person(James.name,John.age); 

document.write(x.name +" whith "+x.age+" years "); //outputs: James whith 25 years


      /*Two components are necessary in order to use information contained within an object
        - Object's Name
        - Property's Name
      */

      /*
        We know that an object is a container for named values. 
        This means values with names are the information contained inside of an object. 
        Here is an example of an object that was used in the lesson = "var person = {name: "John", age:42, favColor: "green"}; 
        What pieces of information do we see here? 
          1. The object which is created by defining the variable "person" (var person = {};) 
          2. The properties of the object which are defined inside of it (name: "John", age: 42, favColor: "green") 
        So if we want to access the information inside of the object, what do we need? 
        (Think of it this way: If we want to isolate a specific piece of information inside of the object, what do we need?) 
          1. We need to know the name of the object we want to access. 
          2. We need to know the name of the object's property we want to access. 
        So, what two things do you need to know to use the information contained in the above object? 
          1. The object's name (person) 
          2. The name of a property/properties within the object (name, age or favColor)
        */





