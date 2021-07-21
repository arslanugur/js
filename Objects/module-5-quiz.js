      //An object's properties are similar to variables; 
      //Methods are similar to functions that are stored as object's properties.


      //Example:
var myString = "abcdef";
document.write(myString.length); //output: 6

      //Array index starts from 0. And length index starts from 1. 
      //In array [abcdef] a=0 b=1 c=2 d=3 e=4 f=5 
      //In length (abcdef) a=1 b=2 c=3 d=4 e=5 f=6


      /*
      Example: to create an object constructor, taking into account 
      that "height" and "weight" are properties 
      and "calculate" is a method for the given object:
      */
function mathCalc (height, weight) {
  this.height = height;
  this.weight = weight;
  this.sampleCalc = calculate;
}

/*
calculate is the name of a function. 
It is being called from the answer line this.SimpleCalc = calculate; 
The calculate function is not shown, so is out of context (which is VERY confusing!) 
but it would be written something like this function calculate() { //some code }
  
Method - is a function and have to consider operator of execution (), 
in this lesson i write calculate without () and pass the exercise
*/

  
  
  
