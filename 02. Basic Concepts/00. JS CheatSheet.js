// String Methods
string[index]       // gets a certain character of a string
string.length       // returns the number of characters in a string
string.split('')    // returns an array of characters of a string
string.toLowerCase()// returns a lowercased string


// Array Methods
array[index]        // returns a certain value from an array
push(value)         // adds the value to the end of the array
pop()               // removes the value from the end of array
shift()             // removes the value from the start of array


// Window Object Properties
history             // returns the history object for the window
self                // returns the current window
name                // sets or returns the name of a window
location            // returns the location object for the window


// Windows Object Methods
alert()             // displays an alert box with a message
close               // closes the current window
clearInterval()     // clears a timer se with setInterval()
clearTimeout()      // clears a timer set with setTimeout()

// Date Object Methods
getMonth()          // gets the month as a number (0-11)
getDate()           // gets the day as a number (1-31)
getHours()          // gets the hour (0-23)
getMinutes()        // gets the minute (0-59)


// Math Object Methods
abs(x)              // returns the absolute value of x
sqrt(x)             // returns the square root of x
random()            // returns a random number between 0 and 1
round(x)            // rounds x to the nearest integer


// HTML DOM Events
click               // occurs when the user clicks on an element
drag                // occurs when an element is being dragged
focus               // occurs when an element gets focus
submit              // occurs when a form is submitted

// Value vs Reference
// Value Code:
const numbers = [1,2,3,4]
const anotherNumbers = numbers
anotherNumbers.push(5);

console.log(numbers === anotherNumbers);  // True

// Reference Code:
// Shallow cloning - One level deep
const original = [1,2,3,4];
const newOg = [...original];
newOg.push(5)

console.log(original === newOg) // False





