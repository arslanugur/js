// 01. Detect Click Outside
// You can use this method to detect if a user has clicked outside/inside of a target element.
// The value returned is a boolean and you can use it to update your app based on the result!
const el = document.querySelector('.some-element');

document.addEventListener('click', (e) => {
  const outside = !el.contains (e. target);
  console.log(outside);
})

// 02. Fire Events Only Once
// You can add { once: true } to your event listener to make sure your event will only be triggered once on a given element.
// It's perfect if you do not want your user to be able to perform an action multiple times on a render.
const el = document.querySelector('.some-element');

el.addEventListener('click', () => {
  console.log('Hello')
}, { once: true })

// This is a great alternative to removeEventListener, which achieves the same result!


// 03. Clone a DOM Node
// You can clone any DOM Node by using the cloneNode() method!
const el = document.querySelector('.some-element');

const clone = el.cloneNode(true);
console.log(clone.outerHTML);
/**
  * <div class="some-element">
  *   <p>Child Node</p>
  * </div>
*/
// It takes one boolean argument. 
// If set to true, it will create a deep clone of the DOM Node, including all of its children!


// 04. Toggle Boolean Attributes
// You can use toggleAttribute() if you want to toggle an element's boolean attributes, 
// meaning the attributes that don't accept a value, like the disabled attribute.
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  input.toggleAttribute('disabled');
});
// This is useful if you want to avoid using ..  
// .. both the setAttribute and removeAttribute calls in order to achieve the same result!



// 05. Get Computed Style
// Use the getComputedStyle() method when you want to quickly access all of the styles of a given element and their complete values!
const element = document.querySelector (.container');

const elementBefore = getComputed Style (element, ':before')
console.log(elementBefore.content); // "You found me!"


.container:before {
  content: 'You found me!'
}
// You can add a second argument to the call if you want to access any pseudo-element of the selected !



// 06. Scroll Elements into View
// You can use the scrollintoView() method on a given element in order to make your browser scroll down to that element!
const button = document.querySelector ('button');
const element = document.querySelector('p');

button.addEventListener('click', () => {
  element.scrollIntoView({ behavior: 'smooth', block: "start" });
})

// The method takes an object as an argument, where you can set the following options:
// Block - The final scroll position of the element after scrolling it into view, the options are: start (default), center, end, nearest
// Behavior - The scroll-behavior of the scroll transition, the options are: auto (default) or smooth




