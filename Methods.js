// MOST USED STRING METHODS
'midudev'.length              // 7
'midudev'[1]                  // i
'midudev'.includes('dev')     // true
'midudev'.indexOf('midu')     // 0
'midudev'.startsWith('midu')  // true
'midudev'.endsWith('paint')   // false
'midudev'.slice(0, 4)         // 'midu'
'midudev'.slice (4)           // 'dev'
'midudev'.toUpperCase()       // 'MIDUDEV'
'MiduDev'.toLowerCase()       // 'midudev'
'midudev'.replace('dev','emo')// 'midu emo'
'midu'.repeat(3)              // 'midumidumidu'
'  mi du  '.trim()            // 'mi du'
'mi du dev'.split(' ')        // ['mi', 'du', 'dev' ]




// ARRAY METHODS (Array Manipulation)
// Array Manipulation means performing some useful operations or changing an array by using array methods or properties.
array.method();

// Part I         // Part II          // Part III         // Part IV          // Part V
toString()        delete              isArray()           entries()           forEach()
join()            concat()            indexOf()           every()             map()
pop()             sort()              lastIndexOf()       some()              filter()
push()            splice()            find()              fill()              reduce()
shift()           slice()             findIndex()         copyWithin()        reduceRight()
unshift()         reverse()           includes()          valueOf()           from()


// 01. toString()
// The toString() Returns a string with array values separated by commas.
// And it does not change the original array.

// Syntax
array.toString()

// Example
let bikes = ["W","X","Y","Z"]
console.log(bikes.toString());    // "W,X,Y,Z"


// 02. join()
// The join() returns a new string by concatenating all of the elements in an array, separated by commas or a specifed separator string.

// Syntax
array. join(separator)

// Example
let bikes = ["yamaha", "Bajaj", "Honda", "TVS"];
console.log(bikes.join());                        // Expected output: "yamaha, Bajaj, Honda, TVS"
console.log(bikes.join(""));                      // Expected output: "yamahaBajajHondaTVS "
console.log(bikes.join("-"));                     // Expected output: "yamaha-Bajaj-Honda-TVS"


// 03. pop()
// The pop() method removes the last element of an array. and returns the removed element.
// And this method changes the original array.

// Syntax
array.pop()

// Example 1
let bikes = ["yamaha", "Bajaj", "Honda","TVS"];
console.log(bikes.pop());                         // TVS
console.log(bikes);                               // changes the original array
                                                  // ["yamaha", "Bajaj", "Honda"]

// Example 2
//  .pop() is a method that is used to remove the last value from an array.
const array = [1, 2, 3];
array.pop();
// Now array has two value: [1,2]
// .pop() doesn't take any parameters.



// 04. push()
// The push() adds new items to the end of an array, and its changes the length of the array.
// returns the new length.

// Syntax
array.push(item1, item2, ..., itemX)

// Example 1:
let bikes = ["yamaha", "Bajaj ", "Honda", "TVS"];

console.log(bikes.push("Ducatti", "Royat Enfield")); // TVSs
console.log(bikes);                               // changes the original array
                                                  // ['yamaha', 'Bajaj', 'Honda', 'Ducatti', 'Royal Enfield']

// Example 2:
// .push() is a method that is used to append or add a new value at the end of the array.
const array = [1, 2, 3];
array.push(4);
// Now array has four value: [1,2,3,4]
// .push() can take one or more parameters.



// 05. shift()
// The shift() removes first element and returns it.

// Syntax
array.shift(); 

// Example 1:
let bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];

console.log(bikes.shift());     // yamaha
console.log(bikes);             // changes the original array
                                // ['Bajaj', 'Honda', 'TVS', 'Ducatti', 'Royal Enfield']

// Example 2:
// This method that is used to remove the first value from an array.
const array = [1, 2, 3];
array.shift();
// Now array has two value: [2,3]
// .shift() doesn't take any parameters.



// 06. unshift()
// The unshift() adds element to beginning and returns new array length.

// Syntax
array.unshift(iteml, item2, ..., itemX)

// Example 1
let bikes = ("Bajaj", "Honda", "Ducatti", "Royal Enfield"];

console.Log (bikes.unshift("BMW", "Kawasaki"));
console.log (bikes);            // changes the original array length
                                // ['BMW', 'Kawasaki', 'Bajaj ', Honda', 'Ducatti', 'Royal Enfield']

// Example 2
// This method that is used to append or add a new value at the start of the array.
const array = [1, 2, 3];
array.unshift(4);
// Now array has four value: [4,1,2,3]
// .unshift() can take one or more parameters.


// PART TWOOOO




// 05. .length
// .length is a property that is used to set or returns the number of elements in an array.
array.length
// You can also use this property to append the new element at the end of an array.
const array = [1, 2, 3];
array[array.length] = 4;
// Now array has four value: [1,2,3,4]










// JS NUMBER METHODS
// All number methods return a new value. They do not change the original value.
// Part I: Converting Variables to Num & String
toString()
Number()
parseFloat()
parseInt()
// Part II: Number Methods
toExponential()
toFixed()
toPrecision()
ValueOf()
// Part III: Number Object Methods
number.isInteger()
number.isSafeInteger()
number.parseFloat()
number.parseInt()


// Part I: Converting Variables to Num & String
// 01. toString()
// The toString() method returns a number as a string.

// Syntax
number.toString(radix);

// Example
let num = 24;
let str = num.toString();
console.log(str, typeof str); // 24, string

------------------------

// 02. Number()
// The Number() method can be used to convert JS variables to numbers,
// If the number cannot be converted, NaN (Not a Number) is returned.

// Syntax
Number(value);

// Examples
let str = "Code";

console.log(Number(str));       // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number("10"));      // 10
console.log(Number(" 10"));     // 10
console.log(Number("10 "));     // 10
console.log(Number(" 10 "));    // 10
console.log(Number("10.33"));   // 10.33
console.log(Number("10, 33"));  // NaN
console.log(Number("10 33") );  // NaN
console.log(Number("Code"));    // NaN

------------------------
// 03. parseFloat()
// The Number.parseFloat() method parses a value as a string and returns the first number.
// If the first character cannot be converted, NaN is returned, Leading and trailing spaces are ignored.
// Only the first number found is returned.

// Syntax
Number.parseFloat(value);

// Examples
Number.parseFloat(10);          // 10
Number.parseFLoat("10");        // 10
Number.parseFloat("10.33");     // 10.33
Number.parseFloat("45 66");     // 45
Number.parseFloat("He was 40"); // NaN

------------------------
// 04. parseInt()
// The Number.parselnt() method parses a value as a string and returns the first integer.
// If the first character cannot be converted, NaN is returned. Leading and trailing spaces are ignored. 
// Only the first integer found is returned

// Syntax
Number.parseInt (value) ;

// Examples
Number.parseInt("10");        // 10
Number.parseInt("10.00");     // 10
Number.parseInt("10. 33 ");   // 10
Number.parseInt("34 45 66");  // 34
Number.parseInt(" 60 ");      // 60
Number.parseInt("40 years");  // 40
Number.parseInt("He was 40"); // NaN


------------------------

// Part II: Number Methods
// 01. toExponential()
// The toExponential() method converts a number into an exponential notation. 
// It is a "shorthand" way of writing repeated multiplication.

// Syntax
number.toExponential(x);
// Example
let num= 5.56789;
let n = num.toExponential(3);   // 5.568e+0

------------------------

// 02. toFixed()
// The toFixed() method converts a number to a string. 
// and this method rounds the string to a specified number of decimals.

// Syntax
number.toFixed(x);
// Example 1
let num = 5.56789;
let n = num.toFixed();   // 6

// Example 2
let num = 5.56789;
let n = num.toFixed(2);   // 5.57

----------------------------

// 03. toPrecision()
// The toPrecision() method formats a number to a specified length.
// A decimal point and nulls are added (if needed), to create the specified length.

// Syntax
number.toPrecision(x);

// Example 1
let num = 13.3714;
let n = num.toPrecision(2); // 13

// Example 2
let num = 0.001658853;
num.toPrecision(2); // 0.0017
num.toPrecision(3); // 0.00166
num.toPrecision(10); // 0. 001658853000

----------------------------

// 04. ValueOf()
// The valueof() method returns the primitive value of a number.

// Syntax
number.valueOf () ;
// Example
let num = 15;
let n num.value0f() ; // 15

----------------------------


// Part III: Number Object Methods
// 01. number.isInteger()
// The Number.isInteger() method returns true if the argument is an integer.

// Syntax
number.isInteger(value);
// Example
Number.isInteger (10) ; //true
Number.isInteger (10.5); //false

----------------------------

// 02. number.isSafeInteger()
// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafelnteger() method returns true if the argument is a safe intege.

// Syntax
Number.isSafeInteger(value);

// Example 1
Number.isSafeInteger(10);                   // true

// Example 2
Number.isSafeInteger(12345678901234567890);  // false


// 03. number.parseFloat()
// The Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned: If the number cannot be converted, returns NaN.

// Syntax
Number.parseFloat(value);

// Examples
Number.parseFloat("10");        // 10
Number.parseFloat("10.33");     // 10.33
Number.parseFloat("10 20 30");  // 10
Number.parseFloat("10 years");  // 10
Number.parseFloat("years 10");  // NaN



// 04. number.parseInt()
// The Number.parselnt() parses a string and returns a whole number.
// Spaces are allowed. Only the first number is returned:

// Syntax
Number.parseInt(value);

// Examples
Number.parseInt("-10");       // -10
Number.parseInt("-10.33");    // -10
Number.parseInt("10");        // 10
Number.parseInt("10.33");     // 10
Number.parseInt("10 20 30");  // 10
Number.parseInt("10 years");  // 10
Number.parseInt("years 10");  // NaN














