// function createStack() {
//   let array = [];

//   return {
//     push: function(item) {
//       array.push(item);
//     },
//     pop: function() {
//       array.pop();
//     },
//     peek: function() {
//       return array[array.length - 1];
//     },
//     size: function() {
//       return array.length;
//     }
//   }
// }

// const bookStack = createStack();
// bookStack.push('How are you?');
// bookStack.push('Let me go into you');
// bookStack.push('Can we grow up?');

// console.log(bookStack.peek());
// bookStack.pop();
// bookStack.pop();
// console.log(bookStack.peek());
// console.log(bookStack.size());



function add(a,b) {
  return a + b;
}

function double(a) {
  return add(a, a);
}

console.log(double(5));