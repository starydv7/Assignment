// studentToJson.js

// Creating a simple student object
let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

// Converting the object to a JSON string
let jsonString = JSON.stringify(student, null, 2); // formatted with indentation

// Logging the JSON string to the console
console.log(jsonString);
