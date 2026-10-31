// 1. Arrow functions
// Old way
function oldAdd(a, b) {
  return a + b;
}
 
// New way
const add = (a, b) => a + b;
 
console.log(oldAdd(2, 3));  // 5
console.log(add(2, 3));     // 5
 
// With one parameter the brackets are optional
const double = n => n * 2;
console.log(double(4));     // 8