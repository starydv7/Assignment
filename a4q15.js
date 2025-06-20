// Define Task One
function taskOne() {
  console.log("Task 1 completed");
}

// Define Task Two, which accepts a callback
function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); // Execute the callback after taskTwo finishes
}

// Call taskTwo and pass taskOne as a callback
taskTwo(taskOne);
