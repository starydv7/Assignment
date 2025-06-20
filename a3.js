// Define a function that will perform multiplication
function multiply(a, b) {
  return a * b;
}

// Wrapper function that uses apply() to call multiply
function multiplyNumbers(num1, num2) {
  return multiply.apply(null, [num1, num2]);
}

// Example usage
console.log(multiplyNumbers(4, 5)); // Output: 20
