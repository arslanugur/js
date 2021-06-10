Comparison Operators
      //We can use comparison operators in logical statements to find out if variables or values are different.

      //You get either true or false.
      //For example, the equal to (==) operator checks whether the operands' values are equal.
var num = 10; 
document.write(num == 8);  //output: false

      //You can compare all types of data with comparison operators, they’ll always return true or false. 
      
      /*
      how = , == and === are use in js?
      = : assignment 
      == : only compares values, equal to
      === : compares values and type, identical (equal and of the same type)
      != not equal to
      !== not identical
      
      = for assigning a value to a variable like var age = 20; 
      == for comparing two variables using type conversion , i.e. 1 == "1" returns true 
      before comparing javascript tries to convert 1 into a string "1". 
      === for comparing two variables whether they are strictly equal 
      this operator is supposed to be used to prevent weird type conversions sample code: var age1= 20; 
      age1 is just a variable not object var age2 = new number(20); 
      age2 is an object here as we used number constructor function using the keyword new */ 
alert(age1 == age2); // true 
alert(age1 === age2); //false 
undefined === null //false 
undefined == null //true 
      
      //One important thing to remember when we use operators, 
      //is that they only work when they’re comparing the same data type; 
      //numbers with numbers, strings with strings, you get the idea. 
      
val1 == val2 // are equal
val1 != val2 // not equal
val1 < val2 // less than
val1 === val2 // are strict equal (identical)
      
     
