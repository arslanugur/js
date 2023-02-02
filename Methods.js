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












