// while loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

let i = 0

while (i < animals.length) {
  console.log(animals[i].toUpperCase());
  i++;
}


// forEach loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

animals.forEach(el => {
  console.log(el.toUpperCase());
})


// map loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

const newAnimals = animals.map(el => {
  const animalUpperCase = el.toUpperCase()
  console.log(animalUpperCase)
  return animalUpperCase
})


// do while loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

let j = 0

do {
  console.log(animals[j].toUpperCase());
  j++;

}
while (j < animals.length)


// for loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

for (let i=0; i < animals.length; i++) {
  console.log(animals[i].toUpperCase());
}  
  
  
// for of loop
const animals = ['dog', 'cat', 'cow', 'horse', 'mouse']

for (const el of animals) {
  console.log(el.toUpperCase())
}



// for in loop
const animals = {
  1: 'dog', 
  2: 'cat', 
  3: 'cow', 
  4: 'horse', 
  5: 'mouse'
}  

for (const key in animals) {
  console.log(animals[key].toUpperCase())
}



