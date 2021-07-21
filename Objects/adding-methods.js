Methods
      //Methods are functions that are stored as object properties.
      //Use the following syntax to create an object method:
methodName = function() { code lines }

      //Access an object method using the following syntax:
objectName.methodName()

      //A method is a function, belonging to an object. It can be referenced using the this keyword.
      //The this keyword is used as a reference to the current object, meaning that you can access the objects properties and methods using it.
      //Defining methods is done inside the constructor function. 
      //For Example:
function person(name, age) {
    this.name = name;  
    this.age = age;   //Let's say the name we want to change is newname.
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21); //New name is John. So we changed it from David to John. p.changeName("John");
p.changeName("John");

document.write(p.name);   //And we print it document.write(p.name);

      /*In the example above, we have defined a method named changeName for our person, which is a function, 
        that takes a parameter name and assigns it to the name property of the object.
        this.name refers to the name property of the object. */

      //The changeName method changes the object's name property to its argument.

      //Example:
function product(name, price , stock) { 
      this.name = name; 
      this.price = price; 
      this.stock =stock; 
      this.outOfStock = 

function (stock ) { 
      this.stock = stock ; } } 

var p = new product("mobile", 21,"instock" ); 
    p.outOfStock("outOfStock" ); 

document.write(p.stock );



      //The "this" keyword in the method means: The current object

      //You can also define the function outside of the constructor function and associate it with the object.
function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}

function bornYear() {
  return 2016 - this.age;
}

      //As you can see, we have assigned the object's yearOfBirth property to the bornYear function.
      //The this keyword is used to access the age property of the object, which is going to call the method.

      //Note that it's not necessary to write the function's parentheses when assigning it to an object.
 
      //Example:
function person(name, age) { 
      this.name= name; 
      this.age = age; 
      this.yearOfBirth = bornYear; } 

function bornYear() { 
      return 2016 - this.age; } 

var p = new person("JJ",21); 
document.write(p.yearOfBirth());


      //Example: Associate the "testData" constructor function below with a method called "mymethod":
function testData (first, second) {
  this.first = first;
  this.second = second;
  this.checkData = mymethod;
}


      // Example: Call the method as usual
function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}

var p = new person("A", 22);

document.write(p.yearOfBirth()); //output: 1994

      //Call the method by the property name 
      //you specified in the constructor function, rather than the function name.

      //Example:
function person(name, yearOfBirth) { 
      this.name= name; 
      this.yearOfBirth = yearOfBirth; 
      this.age = ageNow; } 
function ageNow() { return 2017 - this.yearOfBirth; } 
var p = new person("A", 1993); 
document.write(p.age()); //The output is 24


      //Example:
function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
var currentTime = new Date()
var year = currentTime.getFullYear()
function bornYear() {
    return year - this.age;
}

var p = new person("A", prompt("Type your age"));

document.write("This year is "+year+", and you were born in "+p.yearOfBirth()); 

      //Example: View adult content 
function person(name, year) {
    this.name= name;
    this.yearOfBirth  = year;
    this.age = calculateAge;
}
function calculateAge() {
    return 2017 - this.yearOfBirth ;
}

//request user to input year of birth
var inputYear = prompt("Enter Year of Birth");

var p = new person("James", inputYear);

//checks if user is an adult
if(p.age()<18){
    alert("Explicit Content! Acess Denied");
    document.write("You are under age..go back");
}
else{
    alert("Access Allowed");
    document.write("View our exciting adult content")
    
}

      //In order to use the object's properties within a function, use: the "this" keyword







