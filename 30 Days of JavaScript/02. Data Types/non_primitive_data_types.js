let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Arslan',
  role: 'teaching',
  country: 'Turkey'
}
let userTwo = {
  name: 'Arslan',
  role: 'teaching',
  country: 'Turkey'
}
console.log(userOne == userTwo) // false

let numbers = nums
console.log(nums == numbers)  // true

let userOne = {
name:'Arslan',
role:'teaching',
country:'Turkey'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true


