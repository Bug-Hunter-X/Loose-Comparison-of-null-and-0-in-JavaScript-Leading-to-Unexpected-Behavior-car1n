function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This only returns 0 if a or b is null
  } else if (a === 0 || b === 0) {
    return a + b; //This handles the case when a or b is 0
  }
  return a + b;
}

console.log(foo(null, 5)); //Output: 0
console.log(foo(5, null)); //Output: 0
console.log(foo(0,5)); //Output: 5
console.log(foo(5,0)); //Output: 5