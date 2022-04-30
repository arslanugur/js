// JS Array Cheatsheet
['a', 'b'].concat(['c'])          // ['a', 'b', 'c']
['a', 'b'].join(['-'])            // 'a- b'
['a', 'b', 'c'].slice(1)          // [ 'b', 'c']
['a', 'b', 'c'].indexOf('b')      // 1
['a', 'b', 'b'].lastIndexOf('b')  // 2
[1, 2, 3].map(x => x * 2)         // [2, 4, 6]
[2, 15, 3].sort()                 // [15,2,3]
[1,2,3].reverse()                 // [3, 2, 1]




// KILLER ONE LINERS
// 01. The Shuffle Array
// While using algorithms that require some degree of randomization, you'll often find shuffling arrays quite a necessary skill.
// The following snippet shıffles an array in place with 0(n log n) complexity.
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
// Testing
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(shuffleArray(arr));


// 02. Copy to Clipboard
// In web apps, copy to clipboard is rapidly rising in popularity due to its convenience for the user.
const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
// Testing
copyToClipboard("Hello World!")


// 03. Unique Elements
// Every language has its own implementation of Hash List, in JS, it is called Set.
// You can easily get the unique elements from an array using the Set Data Structure.
const getUnique = (arr) => [...new Set(arr)];
// Testing
const arr = [1,1,2,3,3,4,4,4,5,5];
console.log(getUnique(arr));


// 04. Detect Dark Mode
// With the rising popularity of dark mode, it is ideal to switch your app to dark mode if the user has it enabled in their device.
// Luckily, media queries can be utilized for making the task a walk in the park.
const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
// Testing
console.log(isDarkMode());

// Second Way:
//  with this one-liner, you can check if the user is using dark mode (and then you can update some functionality according to dark mode)
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').match;


// 05. Scroll to Top
// Beginners very often find themselves struggling with scrolling elements.
// The easiest way to stroll elements is to use the scrollIntoView method.
// Add behaviour: "smooth" for a smooth scrolling animation
const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start"});

// Second Way
// You can use window.scrollTo(0, 0) method to automatic scroll to top. Set both x and y as 0.
const goToTop = () => window.scrollTo(0, 0);
goToTop();


// 06. Scroll to Bottom
// Just like the scrollToTop method, the scrollToBottom method can easily be implemented using the scrollIntoView method, only by switching the block value to end
const scrollToBottom = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });


// 07. Generate Random Color
// Does your app rely on rando color generation? Look no further, the following snippet got you covered!
const generateRandomHexColor = () => '#${Math.floor(Math.random() * 0xffffff.toString()16)}';


// 08. Extract Domain Name From An Email
// you can use the substring() method to extract the domain name of the email,
let email = 'xyz@gmail.com';
le getDomain = email.substring(email.indexOf('@') + 1);

console.log(get Domain);    // output - gmail.com


// 09. Generate Random String
//  If you will ever need a temporary unique id for something. This one-liner will generate a random string for you
const randomString = Math.random().toString(36).slice (2);
console.log(randomString);
//output- rozflxfqcr (the string will be random)


// 10. Check if an Element is Focused
// to detect if the element has the focus in JavaScript, 
// you can use the read-only property active Element of the Document object.
const elem = document.querySelector(' .text-input');
const isFocus = elem == document.activeElemnt;
/* isFocus will be true if elem will have focus, and isFocus will be false if elem will not have focus */

// 11. Redirecting User
// you can redirect the user to any specific URL using JavaScript.
const redirect = url => location.href = url
/* call redirect (url) whenever you want to redirect the user to a specific url */


// 12. Check If a Variable is an Array
// You can check if any Variable is an Array or not using the Array.isArray() method,
let fruit = 'apple';
let fruits = ["apple", "banana", "mango", "orange", "grapes"];

const isArray = (arr) => Array.isArray(arr);

console.log(isArray. (fruit)); //output false
console.log(isArray. (fruits)), //output- true


// 13. Check If An Array Is Empty
// this one-liner will let you know if an array is empty or not.
let arr1 = [];
let arr2 = [2, 4, 6, 8, 10];

const arrlIsEmpty = !(Array.isArray(arrl) && arr1.length >0);
const arr2IsEmpty = !(Array.isArray(arr2) && arr2.length >0);

console.log(arrl);  //output true
console.log(arr2);  // output false


// 14. Easy way to access Index in for ... of 
const items = ['a', 'b', 'c', 'd', 'e'];

// We're using array destructuring to access the index ...
for (const [index, item] of items. entries()) {   // We're calling the 'entries()' method of each item ...
  console.log('${index): ${item}');
}


// 15.Convert RGB to Hex
const rgbToHex = (r, g, b) => "#" + ((1<< 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(0, 51, 255); // Result: #0033ff


// 16. Check if Date is valid
// Use the following snippet to check if a given date is valid or not.
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");    // Result: true


// 17. Generate Random Hex
// You can generate random hex colors with Math.random and padEnd properties.
const randomHex = () => '#$(Math.floor(Math.random()* 0xffffff).toString(16).padEnd (6, "0")}';
console.log(randomHex());
// Result: #92b008

// 18. Clear All Cookies
// You can easily clear all cookies stored in a web page by accessing the cookie using document.cookie and clearing it.
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, '=; expires=${newDate(0).toUTCString()}; path=/'));

// 19. Find the day of year
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());  // Result: 272

// 20.Capitalise a String
// Javascript doesn't have an inbuilt capitalise function, so we can use the following code for the purpose.
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")     // Result: Follow for more


// 21. Remove Duplicated from Array
// You can easily remove duplicates with Set in JavaScript. Its a life saver.
const removeDuplicates = (arr) => [...new Set (arr)];
console.log(remove Duplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));    // Result: [1, 2, 3, 4, 5, 6]

// 22. Check if a number is even or odd
const isEven = num => num % 2 ===0;
console.log(isEven(2));   // Result: True




