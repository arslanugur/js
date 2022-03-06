Associative Arrays
      /*While many programming languages support arrays with named indexes (text instead of numbers), 
        called associative arrays JavaScript does not.
        However, you still can use the named array syntax, which will produce an object.*/
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]); //output: 46

      //Now, person is treated as an object, instead of being an array.
      //The named indexes "name" and "age" become properties of the person object. 

      //As the person array is treated as an object, the standard array methods and properties will produce incorrect results. 
      //For example, person.length will return 0.

      //In associative arrays, index numbers are replaced with strings


      /*JavaScript does not support arrays with named indexes.
        In JavaScript, arrays always use numbered indexes.
        It is better to use an object when you want the index to be a string (text).
        Use an array when you want the index to be a number. */

      //If you use a named index, JavaScript will redefine the array to a standard object. 

      //In order to use associative arrays, the "associated" name is put in brackets --> []



