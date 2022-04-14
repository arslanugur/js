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

// 05. Scroll to Top
// Beginners very often find themselves struggling with scrolling elements.
// The easiest way to stroll elements is to use the scrollIntoView method.
// Add behaviour: "smooth" for a smooth scrolling animation
const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start"});


// 06. Scroll to Bottom
// Just like the scrollToTop method, the scrollToBottom method can easily be implemented using the scrollIntoView method, only by switching the block value to end
const scrollToBottom = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });


// 07. Generate Random Color
// Does your app rely on rando color generation? Look no further, the following snippet got you covered!
const generateRandomHexColor = () => '#${Math.floor(Math.random() * 0xffffff.toString()16)}';



