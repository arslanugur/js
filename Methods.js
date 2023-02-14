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


// ARRAY METHODS: PART ONE
--------------------------
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


// ARRAY METHODS: PART TWO
--------------------------
// 07. delete (operator)
// Array elements can be deleted using the JavaScript operator delete,
// Using delete leaves -undefined holes- in the array.

// Syntax
delete array [index]; 

// Example
let fruits = ["banana", "apple", "grapes"];
delete fruits[1]; //  0   1        2
console.log(fruits);    // [ 'banana', <1 empty item>, 'grapes' ]

// 08. concat()
// The concat() method concatenates (joins) two or more arrays. returns a new array, containing the joined arrays.

// This method does not change the existing arrays.
array1.concat(array2, array3, ..., arrayX) // Syntax

// Example
let ary1 = [1, 2, 3];
let ary2 = [23, 43, 53];
let ary3 = [111, 12];

let ary_new = ary1.concat(ary2, ary3);

console.log(ary_new); // returns new array        // [1, 2, 3, 23, 43, 53, 111, 12]

// 09. sort()
// The sort( sorts the elements of an array, and overwrites the original array.
// Sorts the elements as strings in alphabetical and ascending order.

// Syntax
array.sort(compareFunction);

// sort() takes an optional compare function.
// Example
let ary = [99, 32, 23, 43, 53];
let str = ["zebra", "year", "van", "apple"];

ary.sort();
console.log(ary);
// [23, 32, 43, 53, 99]

str.sort();
console.log(str);
// ['apple', 'van', 'year', 'zebra']


// 10. splice()
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Syntax
array.splice(index, howmany, item1, ... , itemX)

// Example
let arry = [99, 32, 23, 43, 53, 100];
arry.splice(2, 3, "a", "b","c");
console.log(arry);                // [99, 32, 'a', 'b', 'c', 100]

// 11. slice()
// The slice() slices out a piece from an array. It creates a new array.
// Syntax
array.slice(start, end);

// Example
let numbers = [1, 2, 3, 4, 5, 6];
let num2 = numbers.slice(1, 4);
console.log(num2);      // [2, 3, 4]


// 12. reverse()
// The reverse() method reverses the order of the elements in an array.

// This method overwrites the original array.
// Syntax
array.reverse();

// Example
let numbers = [1, 2, 3, 4, 5, 6];
let strng = ["A", "B","C", "D"];
numbers.reverse();
console.log(numbers);   // [ 6, 5, 4, 3, 2, 1 ]
strng.reverse();
console.log(strng);     // [ 'D', 'C', 'B', 'A' ]



// ARRAY METHODS: PART THREE
----------------------------
// 13. isArray()
// The isArray() method returns true if an object is an array, otherwise false.
// Check if an object is an array.

// Syntax
Array.isArray(obj);

// Example
let numbers = [1, 2, 3, 4, 5, 6];
let strng = "Code"
console.log(Array.isArray(numbers));  // true
console.log(Array.isArray(strng));    // false

// 14. indexOf()
// The indexOf() method returns the first index (position) of a specified value, 
// ... returns -1 if the value is not found. and it searches from left to right.

// Negative start values counts from the last element (but still searches from left to right)

// Syntax
array.indexOf(item, start); 

// Example
let elements = ["Laptop", "HeadSet ", "Mobile", "Router "];
console.log(elements.index0f("Mobile", 0));   // 2
console.log(elements.index0f("Mobile", 3));   // -1

// 15. lastIndexOf()
// The lastlndexOf() method returns the last index (position) of a specifed value, 
// ... returns -1if the value is not found. starts at a specified index and searches from right to left.

// Negative start values counts from the last element (but still searches from right to left).

// Syntax
array.lastIndexOf(item, start);

// Example
let elements = ["laptop", "Mobile", "HeadSet ", "Mobile", "Router "];
console.log(elements.indexOf("Mobile", 0));   // 1
// indexOf(): left to right

console.log(elements.lastIndexof("Mobile", 4)); // 3
// lastIndexOf(): right to left

            
// 16. find()
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefned is returned.

// Syntax (arrow function)
find((element) => {/* ... */});

// Example
const arry = [5, 12, 8, 130, 44];
const found = arry.find((element) => element > 10);
console.log(found);   // 12

// 17. findIndex()
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, then -1 is returned.

// Syntax
array.findIndex(function(currentValue, index, arr), thisValue)

// Example
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3 (index)
// 130 is large number


// 18. includes()
// The includes() method returns true if an array contains a specified value. (case sensitive)

// if the value is not found returns false 

// Syntax
array.includes(element, start);

// Example
const num = [1, 2, 3];
console.log(num.includes(2));       // Expected output: true
const str = ["cat", "dog", "bat"];
console.log(str.includes("cat"));   // Expected output: true




// ARRAY METHODS: PART FOUR
---------------------------
// 19. entries()
// The entries() method returns an Array Iterator object with key/value pairs. 
// And this method does not change the original array.

// Syntax
array.entries();

// Example
const days = ["sun", "mon", "tue", "wed",
              "thu", "fri", "sat"];

const day = days.entries();

for (let x of day) {
  console.log(x + "\n");
}
// 0, sun
// 1, mon;
// 2, tue;
// 3, wed;
// 4, thu;
// 5, fri;
// 6, sat;


// 20. every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.
// Arrow function Syntax
every((element) => {/* code */}); 

// Example
const array1 = [1, 30, 39, 29, 10, 13];

const isBelow_1 = (currentValue) => currentValue < 40;
console.log(array1.every(isBelow_1));                 // Expected output: true
const isBelow_2 = (currentValue) => currentValue < 30;
console.log(array1.every(isBelow_2));                 // Expected output: true
                  
                  
                  
// 21. some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.

// It returns true if, in the array. it finds an element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array.

// Syntax
array.some(function(value, index, arr), this)

// Example
const ages = [3, 10, 18, 20];
ages.some(checkAdult);
function checkAdult(age) {
return age > 18;
}  // true


// 22. fill()
// The fill() method fills specified elements in an array with a value. method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// Syntax
array.fill(value, start, end);

// Example
// Fill all the elements with a value:
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.fill("Kiwi");
// Output: ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]

// Fill the last two elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
// Output: ["Banana", "Orange", "Kiwi", "Kiwi"]

// 23. copyWithin()
// The copyWithin() method copies array elements to another position in the array, 
// and this method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// Syntax
array.copyWithin (target, start, end);

// Example
// Copy the first two array elements to the last two array elements.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// ["Banana", "Orange", "Banana", "Orange"]

// Copy the first two array elements to the third and fourth position
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.Log(fruits.copyWithin(2, 0, 2));
// ["Banana", "Orange", "Banana", "Orange", "Kiwi", "Papaya"];


// 24. valueOf()
// The valueOf() method returns the array itself,
// and this method does not change the original array.
fruits.valueOf() returns the same as fruits.

// Syntax
array.value0f();

// Example
// Get the value of fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.value0f();
// ["Banana", "Orange", "Apple", "Mango"]

// fruits.valueOf() returns the same as fruits:
const fruits = [" Banana", "Orange", "Apple". "Mango"];
const myArray = fruits;
// "Banana", "Orange", "Apple", "Mango"];


  
// ARRAY METHODS: PART FIVE
---------------------------
// 25. forEach()
// 26. map()
// 27. filter()
// 28. reduce()
// 29. reduceRight()
// 30. from()















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
-----------------------------------------------
// 01. toString()
// The toString() method returns a number as a string.

// Syntax
number.toString(radix);

// Example
let num = 24;
let str = num.toString();
console.log(str, typeof str); // 24, string


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



// Part II: Number Methods
--------------------------
// 01. toExponential()
// The toExponential() method converts a number into an exponential notation. 
// It is a "shorthand" way of writing repeated multiplication.

// Syntax
number.toExponential(x);
// Example
let num= 5.56789;
let n = num.toExponential(3);   // 5.568e+0


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



// 04. ValueOf()
// The valueof() method returns the primitive value of a number.

// Syntax
number.valueOf () ;
// Example
let num = 15;
let n num.value0f() ; // 15




// Part III: Number Object Methods
----------------------------------
// 01. number.isInteger()
// The Number.isInteger() method returns true if the argument is an integer.

// Syntax
number.isInteger(value);
// Example
Number.isInteger (10) ; //true
Number.isInteger (10.5); //false



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














