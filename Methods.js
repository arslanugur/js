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


// ARRAY METHODS
// Part I
toString)
join()
pop[)
push()
shift()
unshift()

// Part II
delete
concat()
sort()
splice()
slice()
reverse()

// Part III
isArray()
indexOf()
lastIndexOf()
find()
findIndex()
includes()

// Part IV
entries()
every()
some()
fill()
copyWithin( )
valueOf()

// Part V
forEach()
map()
filter()
reduce()
reduceRight()
from()



// 01. toString()
// The toString() Returns a string with array values separated by commas.
// And it does not change the original array.

// Syntax
array.toString()

// Example
let bikes = ["W","X","Y","Z"]
console.log(bikes.toString());    // "W,X,Y,Z"


// 02. join()
// The join( ) returns a new string by concatenating all of the elements in an array, separated by commas or a specifed separator string.

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

// Example
let bikes = ["yamaha", "Bajaj", "Honda","TVS"];
console.log(bikes.pop());                         // TVS
console.log(bikes);                               // changes the original array
                                                  // ["yamaha", "Bajaj", "Honda"]

// 04. push()
// The push() adds new items to the end of an array, and its changes the length of the array.
// returns the new length.

// Syntax
array.push(item1, item2, ..., itemX)

// Example:
let bikes = ["yamaha", "Bajaj ", "Honda", "TVS"];

console.log(bikes.push("Ducatti", "Royat Enfield")); // TVSs
console.log(bikes);                               // changes the original array
                                                  // ['yamaha', 'Bajaj', 'Honda', 'Ducatti', 'Royal Enfield']



// 05. shift()
// The shift() removes first element and returns it.

// Syntax
array.shift(); 

// Example:
let bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Ducatti", "Royal Enfield"];

console.log(bikes.shift());     // yamaha
console.log(bikes);             // changes the original array
                                // ['Bajaj', 'Honda', 'TVS', 'Ducatti', 'Royal Enfield']



// 06. unshift()
// The unshift() adds element to beginning and returns new array length.

// Syntax
array.unshift(iteml, item2, ..., itemX)

// Example
let bikes = ("Bajaj", "Honda", "Ducatti", "Royal Enfield"];

console.Log (bikes.unshift("BMW", "Kawasaki"));
console.log (bikes);            // changes the original array length
                                // ['BMW', 'Kawasaki', 'Bajaj ', Honda', 'Ducatti', 'Royal Enfield']




// PART TWOOOO












