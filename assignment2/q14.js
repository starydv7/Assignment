// functionListFix.js

// This function creates a list of functions that each print their corresponding index
function createFunctionList() {
  let functions = [];

  // Using let to ensure block-scoped variable capture
  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

// Create the list of functions
const functionList = createFunctionList();

// Test calls to verify each function prints the correct index
functionList[0](); // Expected Output: Index: 0
functionList[1](); // Expected Output: Index: 1
functionList[2](); // Expected Output: Index: 2
functionList[3](); // Expected Output: Index: 3
functionList[4](); // Expected Output: Index: 4
