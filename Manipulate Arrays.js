// Intro
// Array Manipulation means performing some useful operations or changing an array by using array methods or properties.

array.method();

// Some Useful Methods:

// 01. .push()
// .push() is a method that is used to append or add a new value at the end of the array.
const array = [1, 2, 3];
array.push(4);
// Now array has four value: [1,2,3,4]
// .push() can take one or more parameters.


// 02. .pop()
//  .pop() is a method that is used to remove the last value from an array.
const array = [1, 2, 3];
array.pop();
// Now array has two value: [1,2]
// .pop() doesn't take any parameters.


// 03. .shift()
// .shift() is a method that is used to remove the first value from an array.
const array = [1, 2, 3];
array.shift();
// Now array has two value: [2,3]
// .shift() doesn't take any parameters.

// 04. .unshift()
// .unshift() is a method that is used to append or add a new value at the start of the array.
const array = [1, 2, 3];
array.unshift(4);
// Now array has four value: [4,1,2,3]
// .unshift() can take one or more parameters.


// 05. .length
// .length is a property that is used to set or returns the number of elements in an array.
array.length
// You can also use this property to append the new element at the end of an array.
const array = [1, 2, 3];
array[array.length] = 4;
// Now array has four value: [1,2,3,4]


