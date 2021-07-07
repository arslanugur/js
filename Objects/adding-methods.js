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

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);

      /*In the example above, we have defined a method named changeName for our person, which is a function, 
        that takes a parameter name and assigns it to the name property of the object.
        this.name refers to the name property of the object. */

      //The changeName method changes the object's name property to its argument.

 ction (newname) { this.name = newname; } } var p = new person("David", 21); //New name is John. So we changed it from David to John. p.changeName("John"); //And we print it document.write(p.name);
                            






