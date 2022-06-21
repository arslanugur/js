// 01. Accessing Character
// Let us access the first character in 'JavaScript' string.

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter) // J
let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter) // t
let lastIndex = string.length - 1
console.log(lastIndex) // 9
console.log(string[lastIndex]) // t


// 02. CharAt()
// charAt(): Takes index and it returns the value at that index
string.charAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charAt(0)) // 3
let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t



// 03. charCodeAt()
// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index

string.charCodeAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII number is 51
let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116


