function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unexpected results when either a or b are 0.
  }
  return a + b;
}

console.log(foo(null, 5)); //Output: 0
console.log(foo(5, null)); //Output: 0
console.log(foo(0,5)); //Output: 0
console.log(foo(5,0)); //Output: 0